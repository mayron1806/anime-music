import { useAudio } from '../../Hooks/useAudio';


//icons
import nextButton from "../../icons/next.svg";
import playButton from "../../icons/play.svg";
import pauseButton from "../../icons/pause.svg";
import volume from "../../icons/volume.svg";

//style
import * as C from "./musicPlayer.styles";
//utils
import { Time } from '../../utils/Time';
//types 
import { Playlist } from '../../types/Playlist';
type Props = {
    playlist: Playlist
}
export const MusicPlayer = ({playlist} : Props) =>{
    const player = useAudio(playlist);
    return(
        <C.Container>
            <C.MusicName>Black Clover - Ending 13 | BEAUTIFUL</C.MusicName>
            <C.ButtonsContainer>
                <C.previousMusic src={nextButton} onClick={player.previousMusic}/>
                <C.PlayMusic 
                    src={player.audio.paused ? playButton : pauseButton} 
                    onClick={player.changePlayState}
                />
                <C.NextMusic src={nextButton} onClick={player.nextMusic} />
            </C.ButtonsContainer>
            
            <C.PlaybackContainer>
                <C.PlaybackValue>
                    {Time.ConvertToTime(player.currentTime)}
                </C.PlaybackValue>
                <C.PlaybackBar type="range"
                    min={0}
                    max={player.audio.duration.toString()}
                    value={player.currentTime} 
                    onChange={(e)=>{player.setCurrentTime(e.target.value);}} 
                />
                <C.PlaybackValue>
                {
                    player.audio.readyState !== 0 &&
                    Time.ConvertToTime(player.audio.duration)
                    ||
                    '00:00'
                }
                </C.PlaybackValue>
            </C.PlaybackContainer>
            <C.VolumeContainer>
                <C.VolumeIcon src={volume}/>
                <C.VolumeBar type="range"
                    min={0} 
                    max={100} 
                    value={player.volume} 
                    onChange={(e)=>player.setVolume(parseInt(e.target.value))} 
                />
            </C.VolumeContainer>
           
        </C.Container>
    )
}   