import { useContext } from "react";
import { CurrentMusicContext } from "../../Context/CurrentMusicContext";
import { Playlist } from "../../types/Playlist";
import { MusicItem } from "../MusicItem";
import * as C from "./musicList.styles";
import {RiEmotionSadLine} from "react-icons/ri"
type props = {
    playlist: Playlist | undefined
}
export const MusicList = ({playlist}: props)=>{
    const currentMusicContext = useContext(CurrentMusicContext);
    return(
        <C.Container>
            <C.Header>
                <h2>Musicas</h2>
                {
                    playlist !== undefined && 
                    <p>{currentMusicContext.currentMusicIndex + 1}/{playlist?.length}</p>
                }
            </C.Header>
            <C.MusicsContainer>
                {
                    playlist !== undefined &&
                    playlist.map((item, index) =>(
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
}