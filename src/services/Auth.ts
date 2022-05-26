import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { status } from "../enums/status";
import { Result } from "../types/Result";
import { User } from "../types/User";
import {app, firestore} from "./firebase";


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
            email: u.email, 
            adm: false
        }
        res.content = user;
        res.status = status.SUCCESS;
    })
    .catch((error)=>{
        res.message = "Erro ao realizar Login";
        res.status = status.ERROR;
    })
    // se aconteceu qualquer erro na autenticação esse erro é retornado aqui
    if(res.status === status.ERROR) return res;
    
    // referencia ao usuario no banco 
    const userRef = doc(firestore, `users/${res.content.uid}`);
    
    // verifica se tem um usuario com a referencia acima no banco
    const userSnap = await getDoc(userRef);
    if(userSnap.exists()){
        const user = userSnap.data()
        res.content = user;
        return res;
    }
    //caso nao tenha esse usuario no banco ele sera adicionado
    await setDoc(userRef, res.content);
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