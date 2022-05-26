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
import { memo, useCallback, useContext, useEffect, useMemo } from 'react';
import { CurrentMusicContext } from '../../Context/CurrentMusicContext';
import { behavior } from '../../enums/behavior';


export const MusicPlayer = memo(() =>{
    const player = useAudio();

    const musicContext = useContext(CurrentMusicContext);

    useEffect(()=>{
        if(musicContext.musics === undefined) return;
        player.setMusic(musicContext.musics[musicContext.musicIndex]);
    }, [musicContext.musics])

    const changePlayState = () => {
        if(player.audio.paused) return player.play();
        return player.pause();
    }
    const nextMusic = () => {
        if(musicContext.musics === undefined) return;
        const index = musicContext.musicIndex;
        if(musicContext.musics[index + 1]){
            musicContext.dispatch({behavior: behavior.INCREMENT});
        }
        else{
            musicContext.dispatch({behavior: behavior.RESET});
        }
    }   
    const previousMusic = () => {
        if(musicContext.musics === undefined) return;
        const index = musicContext.musicIndex;
        if(musicContext.musics[index - 1]){
            musicContext.dispatch({behavior: behavior.DECREMENT});
        }
        else{
            musicContext.dispatch({behavior: behavior.MANUAL, value: musicContext.musics.length - 1});
        }
    }

    useEffect(()=>{
        if(musicContext.musics === undefined) return;
        player.setMusic(musicContext.musics[musicContext.musicIndex]);
        player.play();
    }, [musicContext.musicIndex])

    //events
    player.audio.onended = () => nextMusic();

    const playIcon = useCallback(() => {
        if(player.audio.paused){
            return <BsFillPlayFill size={50}/>
        }
        return <BsFillPauseFill size={50}/>
    }, [player.audio.paused])
    const volumeIcon = useCallback(() => {
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
    }, [player.audio.volume])

    const musicIsUndefined = useCallback(() => {
        if(musicContext.musics === undefined) return true;
        return musicContext.musics[musicContext.musicIndex] !== undefined;
    }, [musicContext.musics])

    const musicName = useMemo(() : string => {
        if(musicContext.musics === undefined) return "";
        return musicContext.musics[musicContext.musicIndex].musicName;
    }, [musicContext.musicIndex, musicContext.musics])

    return(
        <C.Container className='player'>
            <C.MusicName>{musicName}</C.MusicName>
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
})