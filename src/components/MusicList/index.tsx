import { useContext, useEffect, memo } from "react";
import { CurrentMusicContext } from "../../Context/CurrentMusicContext";
import { MusicItem } from "../MusicItem";
import * as C from "./musicList.styles";
import {RiEmotionSadLine} from "react-icons/ri";

export const MusicList = memo(()=>{
    const currentMusicContext = useContext(CurrentMusicContext);
    return(
        <C.Container>
            <C.Header>
                <h2>Musicas</h2>
                {
                    currentMusicContext.musics !== undefined && 
                    <p>{currentMusicContext.musicIndex + 1}/{currentMusicContext.musics.length}</p>
                }
            </C.Header>
            <C.MusicsContainer>
                {
                    currentMusicContext.musics !== undefined &&
                    currentMusicContext.musics.map((item, index) =>(
                        <MusicItem key={index} music={item} id={index} />
                    ))
                    ||
                    <C.NoMusic>
                        <p>Ainda não foram adicionadas músicas.</p>
                        <RiEmotionSadLine size={100}/>
                    </C.NoMusic>
                }
            </C.MusicsContainer>
        </C.Container>
    )
})