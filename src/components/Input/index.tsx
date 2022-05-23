import React, { Dispatch, useEffect, useRef } from "react";
import * as C from "./input.styles";
type props = {
    setName: Dispatch<React.SetStateAction<string>>,
    reset: boolean
}
export const Input = ({setName, reset} : props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    useEffect(()=>{
        if(reset && inputRef !== null && inputRef.current != undefined){
           inputRef.current.value = "";    
        }
    }, [reset])

    const change = (element:HTMLInputElement) => {
        setName(element.value);
        if(element.value !== "" || element.focus){
            element.parentElement?.classList.add("active");
        }else{
            element.parentElement?.classList.remove("active");
        }
    }
    const blur = (element : HTMLInputElement)=>{
        if(element.value === ""){
            element.parentElement?.classList.remove("active");
        }
    }
    return(
        <C.NameContainer>
            <label htmlFor="name">Nome da musica(Opcional):</label>
            <input ref={inputRef} type="text" id="name" name="name"
                onBlur={(e)=> blur(e.target)}
                onFocus={(e)=> e.target.parentElement?.classList.add("active")} 
                onChange={(e)=> change(e.target)}
            />
        </C.NameContainer>
    )
}