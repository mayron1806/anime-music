import { useState, useRef, FormEvent } from "react";
import { 
    IoMusicalNotesOutline, 
    IoLogoLinkedin, 
    IoLogoGithub,
    IoLogoGoogle
} from "react-icons/io5";

import { Input } from "../../components/Input";
import Auth from "../../services/Auth";
import * as C from "./login.styles";

export const Login = ()=>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const loginErrorRef = useRef<HTMLParagraphElement | null>(null);
    const googleErrorRef = useRef<HTMLParagraphElement | null>(null);

    const loginWithEmailAndPassword = (e: FormEvent)=>{
        e.preventDefault();

        Auth.login(email, password, "/")
        .catch(error => {
            console.log(error)
            if(loginErrorRef.current){
                loginErrorRef.current.innerHTML = error.message;
            }
        })
    }

    const googleLogin = () => {
        Auth.googleLogin("/")
        .catch(error => {
            console.log(error);
        })  
    }
    const redirectToHome = ()=>{
        window.location.href = "/";
    }
    return(
        <C.Container>
            <C.SiteInfo onClick={() => redirectToHome()}>
                <IoMusicalNotesOutline className="app-icon" size={100}/>
                <C.Title>Anime Music</C.Title>
            </C.SiteInfo>
            <C.ContactArea>
                <p>Quer conhecer o criador?</p>
                <div className="link-area">
                    <C.Link href="https://www.linkedin.com/in/mayron-fernandes/" target="_blank">
                        <IoLogoLinkedin className="social-media" size={60}/>
                    </C.Link>
                    <C.Link href="https://github.com/mayron1806" target="_blank">
                        <IoLogoGithub className="social-media" size={60}/>
                    </C.Link>
                </div>
            </C.ContactArea>
            <main>
                <C.Form onSubmit={e=> loginWithEmailAndPassword(e)}>
                    <C.FormTitle>Login</C.FormTitle>
                    <Input 
                        type="email"
                        inputName="Email:" 
                        setValue={setEmail}
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
            </main>
            
        </C.Container>
    )
}