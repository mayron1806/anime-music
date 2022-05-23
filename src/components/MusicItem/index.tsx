import { useContext, useEffect } from "react";
import { CurrentMusicContext } from "../../Context/CurrentMusicContext";
import { Music }from "../../types/Music"

import * as C from "./musicItem.styles";
type props = {
    music : Music,
    id : number
}
export const MusicItem = ({ music, id }: props)=>{
    const currentMusicContext = useContext(CurrentMusicContext);
    return(
        <C.Container 
            onClick={() => currentMusicContext.setCurrentMusicIndex(id)}
            active={currentMusicContext.currentMusicIndex === id}
        >
            <div className="main-info">
                <p className="id">{id + 1}</p>
                <C.Name>{music.musicName}</C.Name>
            </div>
        </C.Container>
    )
}