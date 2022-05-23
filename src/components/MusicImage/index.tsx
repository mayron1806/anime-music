import { Music } from "../../types/Music";
import * as C from "./musicImage.styles";

import { BsMusicNoteBeamed } from "react-icons/bs";

type props = {music : Music | undefined}
export const MusicImage = ({music} : props)=>{
    const musicImage = ()=>{
        if(music && music.musicAudioURL){
            return <img src={music.musicImageURL} alt="music image" />
        }
        return <BsMusicNoteBeamed size={60}/>
    }
    return(
        <C.Container>
            {musicImage()}
        </C.Container>
    )
}