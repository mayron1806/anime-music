import { useEffect, useState } from 'react';
import { Playlist } from '../types/Playlist';

export const useAudio = (musics : Playlist)=>{
    const [audio] = useState<HTMLAudioElement>(new Audio());
    const [musicIndex, setMusicIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(100);
    const [currentTime, setPlayback] = useState<number>(0);

    useEffect(()=>{
        audio.src = musics.urls[musicIndex];
        audio.autoplay = true;
    }, [musicIndex])

    useEffect(()=>{
        if(audio.readyState !== 0){
            if(isPlaying){audio.play()}
            else {audio.pause()}
            console.log(isPlaying)
        };
    }, [isPlaying])
    
    useEffect(()=>{
        audio.volume = volume / 100;
    }, [volume]);

    const changePlayState = () => {
        setIsPlaying(!isPlaying);
    }
    const setCurrentTime = (value: number | string) => {
        // verifica o tipo da variavel 'value' se for diferente de 'number' sera convertida
        audio.currentTime = typeof(value) === 'number' ? value : parseInt(value);
    }
    const nextMusic = ()=>{
        if((musicIndex + 1) <= musics.urls.length - 1){
            setMusicIndex(musicIndex + 1);
        }else{
            setMusicIndex(0);
        }
        setIsPlaying(true);
    }
    const previousMusic = ()=>{
        if((musicIndex - 1) >= 0){
            setMusicIndex(musicIndex - 1);
        }else{
            setMusicIndex(musics.urls.length - 1);
        }
        setIsPlaying(true);
    }

    // audio events
    // quando a musica encerrar a proxima sera resproduzida
    // caso tenha chegado a ultima musica entao sera resetado
    audio.onended = ()=>{
        if(musicIndex < musics.urls.length - 1) setMusicIndex(musicIndex + 1);
        else setMusicIndex(0)
    };
    // quando o valor da musica mudar o playback vai ser atualizado
    audio.ontimeupdate = () => setPlayback(audio.currentTime);

    return {
        audio,
        changePlayState,
        volume,
        setVolume,
        currentTime,
        setCurrentTime,
        nextMusic,
        previousMusic
    }
}