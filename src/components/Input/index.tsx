import React, { Dispatch, useEffect, useRef } from "react";
import * as C from "./input.styles";
type props = {
    required? : boolean
    type? :string,
    inputName: string,
    setValue: Dispatch<React.SetStateAction<string>>,
    reset?: boolean
}
export const Input = ({inputName ,setValue, reset = false, type = "text", required = false} : props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    useEffect(()=>{
        if(reset && inputRef !== null && inputRef.current != undefined){
           inputRef.current.value = "";    
        }
    }, [reset])

    const change = (element:HTMLInputElement) => {
        setValue(element.value);
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
            <label htmlFor="name">{inputName}</label>
            {
                required && 
                <input ref={inputRef} type={type} id="name" name="name" required
                    onBlur={(e)=> blur(e.target)}
                    onFocus={(e)=> e.target.parentElement?.classList.add("active")} 
                    onChange={(e)=> change(e.target)}
                />
                || 
                <input ref={inputRef} type={type} id="name" name="name"
                    onBlur={(e)=> blur(e.target)}
                    onFocus={(e)=> e.target.parentElement?.classList.add("active")} 
                    onChange={(e)=> change(e.target)}
                />
            }
           
        </C.NameContainer>
    )
}