import { FormEvent, useRef, useState } from "react";
import { 
    IoMusicalNotesOutline, 
    IoLogoLinkedin, 
    IoLogoGithub,
    IoLogoGoogle
} from "react-icons/io5";
import { Input } from "../../components/Input";
import { status } from "../../enums/status";
import Auth from "../../services/Auth";
import Validator from "../../utils/Validator";

import * as C from "./createAcc.styles";

export const CreateAccount = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm_password, setConfirmPassword] = useState<string>("");

    const createAccErrorRef = useRef<HTMLParagraphElement | null>(null);
    const googleErrorRef = useRef<HTMLParagraphElement | null>(null);

    const googleLogin = () => {
        Auth.googleLogin("/")
        .catch(error => {
            console.log(error);
        })
    }
    const createAccount = (e: FormEvent) => {
        e.preventDefault();

        const valodationResult = Validator.validateCreateAccount(name, email, password, confirm_password);
        if(valodationResult.status === status.ERROR){
            if(createAccErrorRef.current){
                createAccErrorRef.current.innerHTML = valodationResult.message;
            }
            return;
        }
        // criar conta
        const createAccountResult = Auth.createAccount(name, email, password, "/");
    }
    
    const redirectToHome = () => {
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
                        <IoLogoLinkedin size={60}/>
                    </C.Link>
                    <C.Link href="https://github.com/mayron1806" target="_blank">
                        <IoLogoGithub size={60}/>
                    </C.Link>
                </div>
            </C.ContactArea>
            <main>
                <C.Form onSubmit={(e)=> createAccount(e)}>
                    <C.FormTitle className="title">Criar conta</C.FormTitle>
                    <Input 
                        required={true}
                        inputName="Nome de usuário:" 
                        setValue={setName}
                    />
                    <Input 
                        required={true}
                        type="email"
                        inputName="Email:" 
                        setValue={setEmail}
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
                    <C.ErrorMessage ref={createAccErrorRef}></C.ErrorMessage>
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
            </main>
            
        </C.Container>
    )
}