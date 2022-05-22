import { useAudio } from '../../Hooks/useAudio';
//icons

import { FaStepBackward, FaStepForward } from "react-icons/fa";
import {
    BsFillVolumeUpFill, 
    BsVolumeDownFill, 
    BsFillVolumeOffFill, 
    BsFillVolumeMuteFill, 
    BsFillPlayFill,
    BsFillPauseFill
} from "react-icons/bs";

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
    const playIcon = ()=>{
        if(player.audio.paused){
            return <BsFillPlayFill size={50}/>
        }
        return <BsFillPauseFill size={50}/>
    }
    const volumeIcon = () => {
        const defaultSize = 40;
        if(player.audio.volume >= 0.9){
            return <BsFillVolumeUpFill size={defaultSize} />
        }
        if(player.audio.volume >= 0.3){
            return <BsVolumeDownFill size={defaultSize} />
        }
        if(player.audio.volume >= 0.01){
            return <BsFillVolumeOffFill size={defaultSize} />
        }
        return <BsFillVolumeMuteFill size={defaultSize} />
    }
    return(
        <C.Container className='player'>
            <C.MusicName>{player.musicName}</C.MusicName>
            <C.ButtonsContainer>
                <C.previousMusic interactable={!isLoading} onClick={()=>console.log("a")}>
                    <FaStepBackward id='back' size={40} />
                </C.previousMusic>
                <C.PlayMusic interactable={!isLoading} onClick={player.changePlayState}>
                    {playIcon()}
                </C.PlayMusic>
                <C.NextMusic interactable={!isLoading} onClick={player.nextMusic}>
                    <FaStepForward size={40}/>
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
                    {volumeIcon()}
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