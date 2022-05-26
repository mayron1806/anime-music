import { Music } from "../../types/Music";
import * as C from "./musicImage.styles";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { memo, useEffect } from "react";
import { Playlist } from "../../types/Playlist";

type props = {music : Music | undefined}

export const MusicImage = memo(({music} : props)=>{
    const musicImage = () => {
        if(music && music.musicAudioURL){
            return <C.Image url={music.musicImageURL} />
        }
        return <C.defaultImage><BsMusicNoteBeamed size={150}/></C.defaultImage>
    }
    return(
        <C.Container>
            {musicImage()}
        </C.Container>
    )
})