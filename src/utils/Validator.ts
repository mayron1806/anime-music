import { status } from "../enums/status"
import { Result } from "../types/Result"

const validateIsNull = (value : string)=>{

}
const validateEquals = (v1 : string, v2: string)=>{
    
}
const validateEmail = (email: string)=>{
    
}
const validateSize = (value: string, max: number, min: number = 0)=>{
    
}

const validateCreateAccount = () : Result => {
    return {
        status: status.DEFAULT,
        message: "ok"
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