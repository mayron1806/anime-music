import { useContext } from "react";
import { CurrentMusicContext } from "../../Context/CurrentMusicContext";
import { Playlist } from "../../types/Playlist";
import { MusicItem } from "../MusicItem";
import * as C from "./musicList.styles";
type props = {
    playlist: Playlist | undefined
}
export const MusicList = ({playlist}: props)=>{
    const currentMusicContext = useContext(CurrentMusicContext);
    return(
        <C.Container>
            <C.Header>
                <h2>Musicas</h2>
                <p>{currentMusicContext.currentMusicIndex + 1}/{playlist?.length}</p>
            </C.Header>
            <C.MusicsContainer>
                {
                    playlist !== undefined &&
                    playlist.map((item, index) =>(
                        <MusicItem key={index} music={item} id={index} />
                    ))
                }
            </C.MusicsContainer>
        </C.Container>
    )
}