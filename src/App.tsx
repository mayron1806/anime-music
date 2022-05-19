import {MusicPlayer} from './components/MusicPlayer';
import { Playlist } from './types/Playlist';


const PLAYLIST : Playlist = {
  urls: [
    "/ed13.mp3", "/op1.mp3", "/op12.mp3"
  ]
}

function App() {
  return(
    <MusicPlayer playlist={PLAYLIST}/>
  )
}

export default App;
