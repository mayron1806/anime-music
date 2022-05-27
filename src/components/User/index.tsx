import { useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Auth from "../../services/Auth";
import * as C from "./user.styles";

export const User = () => {
    const authContext = useContext(AuthContext);

    const exitRef = useRef<HTMLDivElement | null>(null);  
    
    const userClick = () => {
        if(exitRef.current !== null){
            exitRef.current.classList.toggle("active");
        }
    }
    const logOut = () => {
        Auth.logout();
        window.location.href = "/login";
    }
    const userImage = ()=>{
        if(authContext.user !== undefined){
            return (
                <C.UserContent ref={exitRef}>
                    <C.Title onClick={()=>userClick()}>{authContext.user.displayName ?? "user"}</C.Title>
                    <C.Exit>
                        <button onClick={()=>logOut()} className="exit-button">Sair</button>
                    </C.Exit>
                </C.UserContent>
            )
        }
        return <C.Title><C.Link href="/login">Login</C.Link></C.Title>
    }
    return(
        <C.Container>
            {userImage()}
        </C.Container>
    )
}   