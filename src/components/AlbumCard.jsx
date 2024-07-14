import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from '../utils/routes';

import '../styles/AlbumCard.scss';

function AlbumCard({ albumData }) {
  const { artworkUrl100, collectionName, artistName, collectionId } = albumData;

  return (
    <Link
      data-testid={ `link-to-album-${collectionId}` }
      to={ `${routes.album.replace(':id', collectionId)}` }
      className="album-card"
    >
      <img src={ artworkUrl100 } alt={ collectionName } className="album-image" />
      <p data-testid="album-name" className="album-name">{collectionName}</p>
      <span data-testid="artist-name" className="artist-name">{artistName}</span>
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
