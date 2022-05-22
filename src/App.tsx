import { useEffect, useState } from 'react';

import * as C from "./app.styles";
//services
import Music from './services/Music';
// components
import {MusicPlayer} from './components/MusicPlayer';
import { FormAddMusic } from './components/FormAddMusic';
//types
import { Playlist } from './types/Playlist';

function App() {
  const [playlist, setPlaylist] = useState<Playlist>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formActive, setFormActive] = useState<boolean>(false);

  useEffect(()=>{
    const getAllMusics = async () => {
      setIsLoading(true);
      setPlaylist(await Music.getAllMusics());
      setIsLoading(false);
    }
    getAllMusics();
  }, []);

  return(
    <C.Container>
      <C.ButtonForm className={formActive ? "active" : ""} onClick={e=> setFormActive(!formActive)}/>
      <FormAddMusic isActive={formActive}/>
      <MusicPlayer playlist={playlist} isLoading={isLoading}/>

    </C.Container>
  )
}

export default App;
