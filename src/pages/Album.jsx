import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

import musicsAPI from '../services/musicsAPI';

function Album() {
  const [musicList, setMusicList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const musicsRequestAPI = async () => {
      setIsLoading(true);
      const response = await musicsAPI(params.id);
      setMusicList(response);
      setIsLoading(false);
    };
    musicsRequestAPI();
  }, [params]);

  return (
    <div data-testid="page-album">
      <h1>Album</h1>
      {isLoading && <Loading />}
      {musicList
      && (
        <>
          <AlbumCard albumData={ musicList[0] } />
          {musicList.slice(1).map((musicData) => (
            <MusicCard
              key={ musicData.trackId }
              musicData={ musicData }
              setIsLoading={ setIsLoading }
            />))}
        </>)}
    </div>
  );
}

export default Album;
