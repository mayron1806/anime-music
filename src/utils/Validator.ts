import { status } from "../enums/status"
import { Result } from "../types/Result"
import * as EmailValidator from "email-validator";

const validateSize = (value: string, min: number, max: number)=>{
    return (value.length > min && value.length < max);
}

const validateCreateAccount = (name : string, email: string, password: string, confirm_password: string) : Result => {
    try{
        // name
        const minNameSize = 1;
        const maxNameSize = 30;
        if(!validateSize(password, minNameSize, maxNameSize)){
            const options : ErrorOptions = {
                cause: Error("name")
            }
            const ERROR_MESSAGE = `O nome precisa ter no mínimo ${minNameSize} e no máximo ${maxNameSize}.`;
            throw new Error(ERROR_MESSAGE, options);
        }
        // email
        if (!EmailValidator.validate(email)){
            const options : ErrorOptions = {
                cause: Error("email")
            }
            const ERROR_MESSAGE = "Formato de email invalido.";
            throw new Error(ERROR_MESSAGE, options);
        }
        // validade passwords
        if(password !== confirm_password){
            const options : ErrorOptions = {
                cause: Error("password")
            }
            const ERROR_MESSAGE = "As senhas não coincidem.";
            throw new Error(ERROR_MESSAGE, options);
        }
        const minPasswordSize = 1;
        const maxPasswordSize = 30;
        if(!validateSize(password, minPasswordSize, maxPasswordSize)){
            const options : ErrorOptions = {
                cause: Error("password")
            }
            const ERROR_MESSAGE = `A senha precisa ter no mínimo ${minPasswordSize} e no máximo ${maxPasswordSize}.`;
            throw new Error(ERROR_MESSAGE, options);
        }
    }
    catch(e){
        return{
            status: status.ERROR,
            message: (e as Error).message,
            content: (e as Error).cause
        }
    }
    return {
        status: status.SUCCESS,
        message: ""
    }
}
const validateLogin = () : Result => {
    return {
        status: status.DEFAULT,
        message: "ok"
    }
}
export default {
    validateCreateAccount,
    validateLogin
}