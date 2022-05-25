import { useAudio } from '../../Hooks/useAudio';
import { ProgressBar } from '../ProgressBar';
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
import { useContext, useEffect, useRef } from 'react';
import { CurrentMusicContext } from '../../Context/CurrentMusicContext';

type Props = {
    playlist: Playlist | undefined
}
export const MusicPlayer = ({playlist} : Props) =>{
    const player = useAudio();
    
    const playbackBarRef = useRef<HTMLInputElement | null>(null);

    const currentMusicContext = useContext(CurrentMusicContext);

    useEffect(()=>{
        if(playlist === undefined) return;
        player.setMusic(playlist[currentMusicContext.currentMusicIndex]);
    }, [playlist])

    const changePlayState = () => {
        if(player.audio.paused) return player.play();
        return player.pause();
    }

    const nextMusic = () => {
        if(playlist === undefined) return;
        const index = currentMusicContext.currentMusicIndex;
        if(playlist[index + 1]){
            currentMusicContext.setCurrentMusicIndex(index + 1);
        }
        else{
            currentMusicContext.setCurrentMusicIndex(0);
        }
    }   
    const previousMusic = () => {
        if(playlist === undefined) return;
        const index = currentMusicContext.currentMusicIndex;
        if(playlist[index - 1]){
            currentMusicContext.setCurrentMusicIndex(index - 1);
        }
        else{
            currentMusicContext.setCurrentMusicIndex(playlist.length - 1);
        }
    }
    useEffect(()=>{
        if(playlist === undefined) return;
        player.setMusic(playlist[currentMusicContext.currentMusicIndex]);
        player.play();
    }, [currentMusicContext.currentMusicIndex])

    const a = ()=>{console.log("a")}
    //events
    player.audio.onended = () => nextMusic();

    const playIcon = () => {
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

    const musicIsUndefined = ()=>{
        if(playlist === undefined) return true;
        return playlist[currentMusicContext.currentMusicIndex] !== undefined;
    }

    const musicName = () : string => {
        if(playlist === undefined) return "";
        return playlist[currentMusicContext.currentMusicIndex].musicName
    }
    return(
        <C.Container className='player'>
            <C.MusicName>{musicName()}</C.MusicName>
            <C.ButtonsContainer>
                <C.previousMusic interactable={musicIsUndefined()} onClick={()=> previousMusic()}>
                    <FaStepBackward id='back' size={40} />
                </C.previousMusic>
                <C.PlayMusic interactable={musicIsUndefined()} onClick={()=>{changePlayState()}}>
                    {playIcon()}
                </C.PlayMusic>
                <C.NextMusic interactable={musicIsUndefined()} onClick={()=> nextMusic()}>
                    <FaStepForward size={40}/>
                </C.NextMusic>
            </C.ButtonsContainer>
            <C.PlaybackContainer>
                <C.PlaybackValue>
                    {Time.ConvertToTime(player.currentTime)}
                </C.PlaybackValue>
                <ProgressBar
                    width='80%'
                    min={0} 
                    max={player.audio.duration} 
                    current={player.currentTime} 
                    SetValue={player.setCurrentTime}
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
                <C.VolumeIcon interactable={musicIsUndefined()} onClick={() => player.setMute()}>
                    {volumeIcon()}
                </C.VolumeIcon>
                <ProgressBar
                    width='80%'
                    min={0} 
                    max={100} 
                    current={player.volume} 
                    SetValue={player.setVolume} 
                />
            </C.VolumeContainer>
        </C.Container>
    )
}   