import { async } from "@firebase/util";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { status } from "../enums/status";
import { Result } from "../types/Result";
import { User } from "../types/User";
import {app} from "./firebase";


const firebaseApp = app;
const provider = new GoogleAuthProvider();
const auth = getAuth();
const googleLogin = async() => {
    const res : Result = {} as Result
    await signInWithPopup(auth, provider)
    .then((result)=>{
        const u = result.user;
        const user : User = {
            uid: u.uid,
            displayName: u.displayName,
            email: u.email
        }
        res.content = user;
        res.status = status.SUCCESS;
    })
    .catch((error)=>{
        res.message = "Erro ao realizar Login";
        res.status = status.ERROR;
    })
    return res;
}
const logout = ()=>{
    const auth = getAuth();
    auth.signOut();
}
export default {
    googleLogin,
    logout
}