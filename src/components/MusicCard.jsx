import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import routes from '../utils/routes';
import heartIcon from '../assets/images/heart.png';
import filledHeartIcon from '../assets/images/filled_heart.png';

import '../styles/MusicCard.scss';

function MusicCard({ musicData, setIsLoading, favoriteMusicList, setFavoriteMusicList }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { trackName, previewUrl, trackId, artworkUrl100 } = musicData;
  const location = useLocation();

  const handlePlayAudio = ({ target }) => {
    const selectedMusic = document.querySelector('.selected');

    if (selectedMusic && !target.classList.contains('selected')) {
      selectedMusic.pause();
      selectedMusic.classList.remove('selected');
    }

    target.classList.add('selected');
  };

  const handleClickFavorite = async () => {
    const updateIsFavorite = !isFavorite;

    setIsLoading(true);
    if (updateIsFavorite) {
      await addSong(musicData);
    } else {
      await removeSong(musicData);
    }

    setIsFavorite(updateIsFavorite);

    if (location.pathname === routes.favorites) {
      const favoriteMusicListUpdated = await getFavoriteSongs();
      setFavoriteMusicList(favoriteMusicListUpdated);
    }

    setIsLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setIsLoading(false), []);

  useEffect(() => {
    setIsFavorite(
      favoriteMusicList.some(
        (favoriteMusicData) => favoriteMusicData.trackId === trackId,
      ),
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="music-card-container">
      <img src={ artworkUrl100 } alt="Imagem do álbum" className="album-music-image" />
      <div className="audio-info-container">
        <audio
          onPlay={ handlePlayAudio }
          data-testid="audio-component"
          src={ previewUrl }
          controls
          className="music-audio"
        >
          <track kind="captions" />
        </audio>
        <span className="music-name">{trackName}</span>
      </div>
      <img
        src={ isFavorite ? filledHeartIcon : heartIcon }
        alt="Icone de música favoritada"
        onClick={ handleClickFavorite }
        role="presentation"
        className="favorite-music-icon"
      />
    </div>
  );
}

export default MusicCard;

MusicCard.propTypes = {
  musicData: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  }).isRequired,
  setIsLoading: PropTypes.func.isRequired,
  favoriteMusicList: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  })).isRequired,
  setFavoriteMusicList: PropTypes.func.isRequired,
};
