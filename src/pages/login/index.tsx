import { useState } from "react";
import { 
    IoMusicalNotesOutline, 
    IoLogoLinkedin, 
    IoLogoGithub,
    IoLogoGoogle
} from "react-icons/io5";
import { Input } from "../../components/Input";

import * as C from "./login.styles";

export const Login = ()=>{
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
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
                </C.Form>
                <C.OR>OU</C.OR>
                <C.GoogleLogin>
                    <IoLogoGoogle size={30}/>
                    <p>Login com Google</p>
                </C.GoogleLogin>
                <a className="create" href="/create-account">
                    Não possui uma conta?
                </a>
            </div>
        </C.Container>
    )
}