import { useEffect, useState } from 'react';

import * as C from "./home.styles";
import Music from '../../services/Music';
// components
import { MusicPlayer } from '../../components/MusicPlayer';
import { FormAddMusic } from '../../components/FormAddMusic';
//context
import { CurrentMusicContext } from '../../Context/CurrentMusicContext';
//types
import { Playlist } from '../../types/Playlist';
import { MusicList } from '../../components/MusicList';
import { MusicImage } from '../../components/MusicImage';

export const Home = () => {
    const [playlist, setPlaylist] = useState<Playlist>();
  const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(0);
  const [formActive, setFormActive] = useState<boolean>(false);

  useEffect(()=>{
    const getAllMusics = async () => {
      setPlaylist(await Music.getAllMusics());
    }
    getAllMusics();
  }, []);
  
  const currentMusic = ()=>{
    if (playlist === undefined) return undefined;
    return playlist[currentMusicIndex];
  }
  if(playlist?.length === 0){
    return(
      <C.Container>
        <CurrentMusicContext.Provider value={{currentMusicIndex, setCurrentMusicIndex}}>
          <C.ButtonForm className={formActive ? "active" : ""} onClick={e=> setFormActive(!formActive)} />
          <FormAddMusic isActive={formActive} />
        </CurrentMusicContext.Provider>
      </C.Container>
    )
  }else{
    return(
      <C.Container>
        <CurrentMusicContext.Provider value={{currentMusicIndex, setCurrentMusicIndex}}>
          <C.ButtonForm className={formActive ? "active" : ""} onClick={e=> setFormActive(!formActive)} />
          <FormAddMusic isActive={formActive} />
          <main>
            <MusicImage music={currentMusic()}/>
            <MusicList playlist={playlist} />
          </main>
          
          <MusicPlayer playlist={playlist} />
        </CurrentMusicContext.Provider>
      </C.Container>
    )
  }
}