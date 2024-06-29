import React from 'react';
import PropTypes from 'prop-types';

import AlbumCard from './AlbumCard';

function AlbumList({ albumList, search }) {
  return (
    <div>
      <p>{`Resultado de álbuns de: ${search}`}</p>
      {albumList.map((albumData) => (
        <AlbumCard key={ albumData.collectionId } albumData={ albumData } />
      ))}
    </div>
  );
}

export default AlbumList;

AlbumList.propTypes = {
  albumList: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  })).isRequired,
  search: PropTypes.string.isRequired,
};

AlbumList.defaultProp = {
  albumList: PropTypes.arrayOf(PropTypes.shape({
    collectionPrice: undefined,
  })),
};
