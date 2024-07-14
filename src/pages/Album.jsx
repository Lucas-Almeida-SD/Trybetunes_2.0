import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

import musicsAPI from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

import '../styles/Album.scss';

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

    const favoriteSongAPI = async () => {
      const response = await getFavoriteSongs();
      setFavoriteMusicList(response);
    };

    const initComponent = async () => {
      try {
        setIsLoading(true);
        await musicsRequestAPI();
        await favoriteSongAPI();
      } catch (err) {
        console.error('Oops...Algo deu errado. Tente novamente!');
      } finally {
        setIsLoading(false);
      }
    };

    initComponent();
  }, [params]);

  useEffect(() => {

  }, []);

  return (
    <div data-testid="page-album" className="page" id="album-page">
      {isLoading && <Loading />}
      {musicList && favoriteMusicList
      && (
        <>
          <div id="album-container">
            <AlbumCard albumData={ musicList[0] } />
          </div>
          <div id="music-list-container">
            {musicList.slice(1).map((musicData) => (
              <MusicCard
                key={ musicData.trackId }
                musicData={ musicData }
                setIsLoading={ setIsLoading }
                favoriteMusicList={ favoriteMusicList }
                setFavoriteMusicList={ setFavoriteMusicList }
              />))}
          </div>
        </>)}
    </div>
  );
}

export default Album;
