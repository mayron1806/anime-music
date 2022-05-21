import { useEffect, useState } from 'react';
import { Playlist } from '../types/Playlist';

export const useAudio = (playlist : Playlist | undefined)=>{
    const [audio] = useState<HTMLAudioElement>(new Audio());
    const [musicName, setMusicName] = useState<string>("");
    const [musicIndex, setMusicIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(100);
    const [muted, setMuted] = useState<boolean>(false);
    const [currentTime, setPlayback] = useState<number>(0);

    useEffect(()=>{
        if(playlist !== undefined && playlist.length > 0){
            setupMusic();
        }
    }, [playlist])

    useEffect(()=>{
        if(audio.readyState !== 0){
            if(isPlaying){audio.play()}
            else {audio.pause()}
            console.log(isPlaying)
        }else{
            console.log("no music");
        }
    }, [isPlaying])
    
    useEffect(()=>{
        audio.volume = volume / 100;
        if(volume === 0){
            setMuted(true);
            return;
        }
        setMuted(false);
    }, [volume]);

    const changePlayState = () => {
        setIsPlaying(!isPlaying);
    }
    const setCurrentTime = (value: number | string) => {
        // verifica o tipo da variavel 'value' se for diferente de 'number' sera convertida
        audio.currentTime = typeof(value) === 'number' ? value : parseInt(value);
    }
    const nextMusic = ()=>{
        if(playlist === undefined) return;
        if((musicIndex + 1) <= playlist.length - 1){
            setMusicIndex(musicIndex + 1);
        }else{
            setMusicIndex(0);
        }
        setIsPlaying(true);
        setupMusic();
    }
    const previousMusic = ()=>{
        if(playlist === undefined) return;
        if((musicIndex - 1) >= 0){
            setMusicIndex(musicIndex - 1);
        }else{
            setMusicIndex(playlist.length - 1);
        }
        setIsPlaying(true);
        setupMusic();
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
    const setupMusic = () => {
        if(playlist === undefined) return;
        audio.src = playlist[musicIndex].musicAudioURL;
        audio.autoplay = true;
        setMusicName(playlist[musicIndex].musicName);
    }

    // audio events
    // quando a musica encerrar a proxima sera resproduzida
    // caso tenha chegado a ultima musica entao sera resetado
    audio.onended = ()=>{
        if(playlist === undefined) return;
        if(musicIndex < playlist.length - 1) setMusicIndex(musicIndex + 1);
        else setMusicIndex(0);
        setupMusic();
    };
    // quando o valor da musica mudar o playback vai ser atualizado
    audio.ontimeupdate = () => setPlayback(audio.currentTime);

    return {
        audio,
        musicName,
        changePlayState,
        volume,
        setVolume,
        muted,
        setMute,
        currentTime,
        setCurrentTime,
        nextMusic,
        previousMusic
    }
}