import { useEffect, useState } from 'react';
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

  useEffect(()=>{
    const getAllMusics = async () => {
      setIsLoading(true);
      setPlaylist(await Music.getAllMusics());
      setIsLoading(false);
    }
    getAllMusics();
  }, []);

  return(
    <div>
      <FormAddMusic/>
      <MusicPlayer playlist={playlist} isLoading={isLoading}/>
    </div>
  )
}

export default App;
