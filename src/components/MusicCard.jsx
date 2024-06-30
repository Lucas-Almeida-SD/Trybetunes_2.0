import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { addSong, removeSong } from '../services/favoriteSongsAPI';

function MusicCard({ musicData, setIsLoading, favoriteMusicList }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { trackName, previewUrl, trackId } = musicData;

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
    setIsLoading(false);
  };

  useEffect(() => {
    setIsFavorite(
      favoriteMusicList.some(
        (favoriteMusicData) => favoriteMusicData.trackId === trackId,
      ),
    );
  }, [favoriteMusicList, trackId]);

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
};
