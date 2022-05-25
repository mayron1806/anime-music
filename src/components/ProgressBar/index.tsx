import { Dispatch, useEffect, useMemo } from "react";
import * as C from "./progressbar.styles";
type props = {
    min: number,
    max: number,
    current: number,
    SetValue: (Dispatch<React.SetStateAction<number>>) | ((value: number) => void),
    width?: string
}
export const ProgressBar = ({min, max, current, SetValue, width}:props)=>{
    const percent = useMemo(()=>{
        const p = (current - min) / (max - min) * 100;
        return `${p}%`;
    }, [current])
    return (
        <C.ProgressBar 
            percent={percent}
            type="range"
            width={width}
            min={min}
            max={max}
            value={current}
            onChange={e => SetValue(parseFloat(e.target.value))}
        />
    )
}