import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

import musicsAPI from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

function Album() {
  const [musicList, setMusicList] = useState(null);
  const [favoriteMusicList, setFavoriteMusicList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const musicsRequestAPI = async () => {
      const response = await musicsAPI(params.id);
      setMusicList(response);
    };

    const favoriteSongResponse = async () => {
      const response = await getFavoriteSongs();
      setFavoriteMusicList(response);
    };

    const initComponent = async () => {
      setIsLoading(true);
      await musicsRequestAPI();
      await favoriteSongResponse();
      setIsLoading(false);
    };

    initComponent();
  }, [params]);

  useEffect(() => {

  }, []);

  return (
    <div data-testid="page-album">
      <h1>Album</h1>
      {isLoading && <Loading />}
      {musicList && favoriteMusicList
      && (
        <>
          <AlbumCard albumData={ musicList[0] } />
          {musicList.slice(1).map((musicData) => (
            <MusicCard
              key={ musicData.trackId }
              musicData={ musicData }
              setIsLoading={ setIsLoading }
              favoriteMusicList={ favoriteMusicList }
            />))}
        </>)}
    </div>
  );
}

export default Album;
