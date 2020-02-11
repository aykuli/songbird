import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Top } from './Top';
import { fetchPlaylist, PlaylistContext } from '../../store/playlist';

export function Player() {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const Container = styled.div`
    position: relative;
    width: 500px;
    margin: 0 auto;
    border-radius: 5px;
  `;

  const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const handleNextTrack = () => {
    if (currentTrack === playlist.length - 1) {
      setCurrentTrack(0);
      return;
    }
    setCurrentTrack(currentTrack + 1);
  };

  const handleFetchData = async () => {
    const playlist = await fetchPlaylist();
    setPlaylist(playlist);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (playlist.length === 0) {
    return (
      <Container>
        <Loading>loading...</Loading>
      </Container>
    );
  }

  return (
    <Container>
      <PlaylistContext.Provider value={{ handleNextTrack }}>
        <Top track={playlist[currentTrack]} />
      </PlaylistContext.Provider>
    </Container>
  );
}
