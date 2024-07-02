import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import routes from '../utils/routes';

function MusicCard({ musicData, setIsLoading, favoriteMusicList, setFavoriteMusicList }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { trackName, previewUrl, trackId } = musicData;
  const location = useLocation();

  const handlePlayAudio = ({ target }) => {
    const selectedMusic = document.querySelector('.selected');

    if (selectedMusic && !target.classList.contains('selected')) {
      selectedMusic.pause();
      selectedMusic.classList.remove('selected');
    }

    target.classList.add('selected');
  };

  const handleChangeFavorite = async ({ target }) => {
    setIsLoading(true);
    if (target.checked) {
      await addSong(musicData);
    } else {
      await removeSong(musicData);
    }

    setIsFavorite(!target.checked);

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
    <div>
      <span>{trackName}</span>
      <audio
        onPlay={ handlePlayAudio }
        data-testid="audio-component"
        src={ previewUrl }
        controls
      >
        <track kind="captions" />
      </audio>
      <label htmlFor={ trackId }>
        <input
          data-testid={ `checkbox-music-${trackId}` }
          type="checkbox"
          id={ trackId }
          onChange={ handleChangeFavorite }
          checked={ isFavorite }
        />
        <span>Favorita</span>
      </label>
    </div>
  );
}

export default MusicCard;

MusicCard.propTypes = {
  musicData: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  setIsLoading: PropTypes.func.isRequired,
  favoriteMusicList: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  })).isRequired,
  setFavoriteMusicList: PropTypes.func.isRequired,
};
