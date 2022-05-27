import React, { createContext } from "react";
import { Crement } from "../types/Crement";
import { Musics } from "../types/Musics";
type musicIndexProps = {
    musicIndex: number,
    dispatch: React.Dispatch<Crement>,
    musics?: Musics
}

export const CurrentMusicContext = createContext<musicIndexProps>({} as musicIndexProps)