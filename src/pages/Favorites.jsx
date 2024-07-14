import React, { useEffect, useState } from 'react';

import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

import '../styles/Favorites.scss';

function Favorites() {
  const [favoriteMusicList, setFavoriteMusicList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const favoriteSongAPI = async () => {
      setIsLoading(true);
      const response = await getFavoriteSongs();
      setFavoriteMusicList(response);
      setIsLoading(false);
    };
    favoriteSongAPI();
  }, []);

  return (
    <div data-testid="page-favorites" className="page" id="favorites-page">
      {isLoading && <Loading />}
      {favoriteMusicList
      && favoriteMusicList.map((favoriteMusicData) => (
        <MusicCard
          key={ favoriteMusicData.trackId }
          musicData={ favoriteMusicData }
          setIsLoading={ setIsLoading }
          favoriteMusicList={ [favoriteMusicData] }
          setFavoriteMusicList={ setFavoriteMusicList }
        />
      ))}
    </div>
  );
}

export default Favorites;
