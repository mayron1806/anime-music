import React, { createContext, Dispatch } from "react";
import { Music } from "../types/Music";
type currentMusicIndex = {
    currentMusicIndex: number,
    setCurrentMusicIndex: Dispatch<React.SetStateAction<number>>
}
export const CurrentMusicContext = createContext<currentMusicIndex>({} as currentMusicIndex)