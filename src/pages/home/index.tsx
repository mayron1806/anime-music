import { useEffect, useMemo, useReducer, useState } from 'react';

import * as C from "./home.styles";
import Music from '../../services/Music';
// components
import { MusicPlayer } from '../../components/MusicPlayer';
import { FormAddMusic } from '../../components/FormAddMusic';
//context
import { CurrentMusicContext } from '../../Context/CurrentMusicContext';
//types
import { Musics } from '../../types/Musics';
import { MusicList } from '../../components/MusicList';
import { MusicImage } from '../../components/MusicImage';
import { User } from '../../components/User';
import { behavior } from '../../enums/behavior';
import { Crement } from '../../types/Crement';
import { useCallback } from 'react';


const reducer = (state: number, {behavior: b ,value = 0} : Crement)=>{
  switch(b){
    case behavior.DECREMENT:
      return state - 1;
    case behavior.INCREMENT:
      return state + 1;
    case behavior.RESET:
      return 0;
    case behavior.MANUAL:
      return value;
  }
}
export const Home = () => {
  const [musics, setMusics] = useState<Musics>();

  const [formActive, setFormActive] = useState<boolean>(false);

  const [musicIndex, dispatch] = useReducer(reducer, 0);
  const musicContext = useMemo(()=> ({musicIndex, dispatch, musics}), [musicIndex, musics]);

  const getAllMusics = useCallback(async () => {
    setMusics(await Music.getAllMusics());
  }, []);
  useEffect(()=>{
    getAllMusics();
  }, []);

  /*if(playlist?.length === 0){
    return(
      <C.Container backgroundURL={undefined}>
        <C.BackgroundBlur>
          <CurrentMusicContext.Provider value={musicContext}>
            <C.Header>
              <User />
              <C.ButtonForm className={formActive ? "active" : ""} onClick={e=> setFormActive(!formActive)} />
            </C.Header>
            <FormAddMusic isActive={formActive} />
            <main>
              <MusicImage music={currentMusic()} playlist={playlist}/>
              <MusicList playlist={undefined} />
            </main>
            <MusicPlayer playlist={undefined} />
          </CurrentMusicContext.Provider>
        </C.BackgroundBlur>
      </C.Container>
    )
  }else{*/
    return(
      <C.Container backgroundURL={musics === undefined ? undefined : musics[musicIndex].musicImageURL}>
        <C.BackgroundBlur>
          <CurrentMusicContext.Provider value={musicContext}>
          <C.Header>
              <User />
              <C.ButtonForm className={formActive ? "active" : ""} onClick={e=> {setFormActive(state => !state)}} />
            </C.Header>
            <FormAddMusic isActive={formActive} />
            <main>
              <MusicImage/>
              <MusicList />
            </main>
            <MusicPlayer />
          </CurrentMusicContext.Provider>
        </C.BackgroundBlur>
      </C.Container>
    )
  //}
}