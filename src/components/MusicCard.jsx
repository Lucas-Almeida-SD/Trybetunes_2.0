import React from 'react';
import PropTypes from 'prop-types';

function MusicCard({ musicData }) {
  const { trackName, previewUrl } = musicData;

  const handlePlayAudio = ({ target }) => {
    const selectedMusic = document.querySelector('.selected');

    if (selectedMusic && !target.classList.contains('selected')) {
      selectedMusic.pause();
      selectedMusic.classList.remove('selected');
    }

    target.classList.add('selected');
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
    </div>
  );
}

export default MusicCard;

MusicCard.propTypes = {
  musicData: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};
