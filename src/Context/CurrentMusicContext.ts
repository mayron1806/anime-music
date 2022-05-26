import React, { createContext } from "react";
import { Crement } from "../types/Crement";
type musicIndexProps = {
    musicIndex: number,
    dispatch: React.Dispatch<Crement>
}

export const CurrentMusicContext = createContext<musicIndexProps>({} as musicIndexProps)