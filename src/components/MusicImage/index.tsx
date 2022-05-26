import * as C from "./musicImage.styles";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { memo, useContext, useEffect } from "react";
import { CurrentMusicContext } from "../../Context/CurrentMusicContext";

export const MusicImage = memo(()=>{
    const musicContext = useContext(CurrentMusicContext);
  
    const musicImage = () => {
        if(musicContext.musics === undefined) 
            return <C.defaultImage><BsMusicNoteBeamed size={150}/></C.defaultImage>
        
        const music = musicContext.musics[musicContext.musicIndex];
        return <C.Image url={music.musicImageURL} />
    }
    return(
        <C.Container>
            {musicImage()}
        </C.Container>
    )
})