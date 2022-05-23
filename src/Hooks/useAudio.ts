import { useEffect, useState } from 'react';
import { Music } from '../types/Music';

export const useAudio = ()=>{
    const [audio] = useState<HTMLAudioElement>(new Audio());
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [volume, setVolume] = useState<number>(100);
    const [muted, setMuted] = useState<boolean>(false);

    useEffect(()=>{
        audio.volume = volume / 100;
        if(volume === 0){
            setMuted(true);
            return;
        }
        setMuted(false);
    }, [volume]);

    const setMusic = (music : Music)=>{
        audio.src = music.musicAudioURL;
    }
    const setMute = () => {
        if(muted){
            setVolume(100);
            setMuted(false);
            return;
        }
        setVolume(0);
        setMuted(true);
    }
    const play = () => audio.play();
    const pause = () => audio.pause();

    const setAudioCurrentTime = (value : number)=>{
        audio.currentTime = value;
    }

    audio.ontimeupdate = ()=>{
        setCurrentTime(audio.currentTime);
    }
    const onEnd = audio.onended;
    return {
        audio,
        setMusic,
        play,
        pause,
        volume,
        setVolume,
        muted,
        setMute,
        currentTime,
        setCurrentTime : setAudioCurrentTime
    }
}