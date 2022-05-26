import { useContext, useEffect, useRef, useState } from "react";
import { 
    IoMusicalNotesOutline, 
    IoLogoLinkedin, 
    IoLogoGithub,
    IoLogoGoogle
} from "react-icons/io5";
import { Input } from "../../components/Input";
import { AuthContext } from "../../Context/AuthContext";
import { status } from "../../enums/status";
import Login from "../../services/Auth";

import * as C from "./createAcc.styles";

export const CreateAccount = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const loginErrorRef = useRef<HTMLParagraphElement | null>(null);
    const googleErrorRef = useRef<HTMLParagraphElement | null>(null);

    const userContext = useContext(AuthContext);

    const googleLogin = () => {
        Login.googleLogin()
        .then((res)=>{
            if(res.status === status.SUCCESS){
                userContext.login(res.content);   
            }
            else if(res.status === status.ERROR){
                if(googleErrorRef.current){
                    googleErrorRef.current.innerHTML = res.message;
                }
            }
        })
        .catch((error)=>{
            if(googleErrorRef.current){
                googleErrorRef.current.innerHTML = error.message;
            }
        })
    }
    const redirectToHome = ()=>{
        window.location.href = "/";
    }
    
    return(
        <C.Container>
            <div className="left">
                <C.SiteInfo onClick={()=>redirectToHome()}>
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
                        required={true}
                        inputName="Nome de usuário:" 
                        setValue={setName}
                    />
                    <Input 
                        required={true}
                        type="email"
                        inputName="Email:" 
                        setValue={setName}
                    />
                    <Input 
                        required={true}
                        type="password"
                        inputName="Senha:" 
                        setValue={setPassword}
                    />
                    <Input 
                        required={true}
                        type="password"
                        inputName="Confirmar senha:" 
                        setValue={setConfirmPassword}
                    />
                    <input type="submit" value="Criar Conta" />
                    <C.ErrorMessage ref={loginErrorRef}></C.ErrorMessage>
                </C.Form>
                <C.OR>OU</C.OR>
                <C.GoogleLogin onClick={() => googleLogin()}>
                    <IoLogoGoogle size={30}/>
                    <p>Login com Google</p>
                </C.GoogleLogin>
                <C.ErrorMessage ref={googleErrorRef}></C.ErrorMessage>
                <a className="login" href="/login">
                    Já tem uma conta?
                </a>
            </div>
            
        </C.Container>
    )
}