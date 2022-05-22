import React, { Dispatch } from "react";
import * as C from "./input.styles";
type props = {
    setName: Dispatch<React.SetStateAction<string>>
}
export const Input = ({setName} : props) => {
    
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
            <input type="text" id="name" name="name"
                onBlur={(e)=> blur(e.target)}
                onFocus={(e)=> e.target.parentElement?.classList.add("active")} 
                onChange={(e)=> change(e.target)}
            />
        </C.NameContainer>
    )
}