import { useContext, useState, useRef } from "react";
import { 
    IoMusicalNotesOutline, 
    IoLogoLinkedin, 
    IoLogoGithub,
    IoLogoGoogle
} from "react-icons/io5";

import { Input } from "../../components/Input";
import Auth from "../../services/Auth";
import { status } from "../../enums/status";
import * as C from "./login.styles";
import { AuthContext } from "../../Context/AuthContext";

export const Login = ()=>{
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const userContext = useContext(AuthContext);

    const loginErrorRef = useRef<HTMLParagraphElement | null>(null);
    const googleErrorRef = useRef<HTMLParagraphElement | null>(null);

    const googleLogin = () => {
        Auth.googleLogin()
        .then((res)=>{
            if(res.status === status.SUCCESS){
                userContext.login(res.content);
            }
            else if(res.status === status.ERROR){
                if(googleErrorRef.current){
                    googleErrorRef.current.innerHTML = res.message;
                }
            }
            console.log("ok")
        })
        .catch((error)=>{
            if(googleErrorRef.current){
                googleErrorRef.current.innerHTML = error.message;
            }
        })
        
    }
    return(
        <C.Container>
            <div className="left">
                <C.SiteInfo>
                    <IoMusicalNotesOutline size={140}/>
                    <C.Title>Anime Music</C.Title>
                </C.SiteInfo>
                <C.ContactArea>
                    <p>Quer conhecer o criador?</p>
                    <div className="link-area">
                        <C.Link href="https://www.linkedin.com/in/mayron-fernandes/" target="_blank">
                            <IoLogoLinkedin size={60}/>
                        </C.Link>
                        <C.Link href="https://github.com/mayron1806" target="_blank">
                            <IoLogoGithub size={60}/>
                        </C.Link>
                    </div>
                </C.ContactArea>
            </div>
            <div className="right">
                <C.Form>
                    <C.Title className="title">Login</C.Title>
                    <Input 
                        inputName="Nome de usuário:" 
                        setValue={setName}
                    />
                    <Input 
                        type="password"
                        inputName="Senha:" 
                        setValue={setPassword}
                    />
                    <input type="submit" value="Entrar" />
                    <C.ErrorMessage ref={loginErrorRef}></C.ErrorMessage>
                </C.Form>
                <C.OR>OU</C.OR>
                <C.GoogleLogin onClick={() => googleLogin()}>
                    <IoLogoGoogle size={30}/>
                    <p>Login com Google</p>
                </C.GoogleLogin>
                <C.ErrorMessage ref={googleErrorRef}></C.ErrorMessage>
                <a className="create" href="/create-account">
                    Não possui uma conta?
                </a>
            </div>
        </C.Container>
    )
}