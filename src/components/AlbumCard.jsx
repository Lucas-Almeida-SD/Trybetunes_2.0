import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../utils/routes';

function AlbumCard({ albumData }) {
  const { artworkUrl100, collectionName, artistName, collectionId } = albumData;

  return (
    <Link
      data-testid={ `link-to-album-${collectionId}` }
      to={ `${routes.album.replace(':id', collectionId)}` }
    >
      <div>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <p>{collectionName}</p>
        <span>{artistName}</span>
      </div>
    </Link>
  );
}

export default AlbumCard;

AlbumCard.propTypes = {
  albumData: PropTypes.shape(
    {
      artistId: PropTypes.number.isRequired,
      artistName: PropTypes.string.isRequired,
      collectionId: PropTypes.number.isRequired,
      collectionName: PropTypes.string.isRequired,
      collectionPrice: PropTypes.number,
      artworkUrl100: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      trackCount: PropTypes.number.isRequired,
    },
  ).isRequired,
};

AlbumCard.defaultProp = {
  albumData: {
    collectionPrice: undefined,
  },
};
