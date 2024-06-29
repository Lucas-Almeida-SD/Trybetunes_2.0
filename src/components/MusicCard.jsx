import React from 'react';
import PropTypes from 'prop-types';

import { addSong } from '../services/favoriteSongsAPI';

function MusicCard({ musicData, setIsLoading }) {
  const { trackName, previewUrl, trackId } = musicData;

  const handlePlayAudio = ({ target }) => {
    const selectedMusic = document.querySelector('.selected');

    if (selectedMusic && !target.classList.contains('selected')) {
      selectedMusic.pause();
      selectedMusic.classList.remove('selected');
    }

    target.classList.add('selected');
  };

  const handleClickFavorite = async () => {
    setIsLoading(true);
    await addSong(musicData);
    setIsLoading(false);
  };

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
          onChange={ handleClickFavorite }
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
};
