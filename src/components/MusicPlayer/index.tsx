import { useAudio } from '../../Hooks/useAudio';
//icons
import nextButton from "../../icons/next.svg";
import playButton from "../../icons/play.svg";
import pauseButton from "../../icons/pause.svg";
import volume from "../../icons/volume.svg";
import mute from "../../icons/volume-mute.svg";
//style
import * as C from "./musicPlayer.styles";
//utils
import { Time } from '../../utils/Time';
//types 
import { Playlist } from '../../types/Playlist';

type Props = {
    playlist: Playlist | undefined,
    isLoading: Boolean
}
export const MusicPlayer = ({playlist, isLoading} : Props) =>{
    const player = useAudio(playlist);

    return(
        <C.Container>
            <C.MusicName>{player.musicName}</C.MusicName>
            <C.ButtonsContainer>
                <C.previousMusic interactable={!isLoading} onClick={()=>console.log("a")}>
                    <img src={nextButton} alt="previous button" />
                </C.previousMusic>
                <C.PlayMusic interactable={!isLoading} onClick={player.changePlayState}>
                    <img src={player.audio.paused ? playButton : pauseButton}  alt="play" />
                </C.PlayMusic>
                <C.NextMusic interactable={!isLoading} onClick={player.nextMusic}>
                    <img src={nextButton} alt="next button" />
                </C.NextMusic>
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
                <C.VolumeIcon interactable={!isLoading} onClick={() => player.setMute()}>
                    <img src={player.muted ? mute : volume} alt="volume" />
                </C.VolumeIcon>
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