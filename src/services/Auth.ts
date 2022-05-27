import { app } from "./firebase";
import { 
    GoogleAuthProvider, 
    getAuth, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signOut, 
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";

const firebaseApp = app;

const redirectTo = (url: string) => {
    window.location.href = url;
}
const createAccount = async(name: string, email: string, password: string, redirectURL?: string) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
        if(auth.currentUser){
            updateProfile(auth.currentUser, {displayName: name})
            .then(()=>{
                if(redirectURL) redirectTo(redirectURL);
            })
            .catch(error => {
                throw new Error(error);
            })
        }
    })
    .catch(error=>{
        throw new Error(error);
    })
}
const login = async (email: string, password: string, redirectURL?: string) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
        if(redirectURL) redirectTo(redirectURL);
    })
    .catch((error: Error) => {
        const errorMessage : string = error.message.toLowerCase();
        if(errorMessage.includes("user-not-found")){
            throw new Error("Usuário não encontrado.");
        }
        if(errorMessage.includes("wrong-password")){
            throw new Error("A senha está incorreta.");
        }
        throw new Error(error.message);
    })
}

const googleLogin = async(redirectURL?: string) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
    .then(()=>{
        if(redirectURL) redirectTo(redirectURL);
    })
    .catch((error)=> {
        throw new Error(error);
    })
}

const logout = ()=>{
    const auth = getAuth();
    signOut(auth);
}

export default {
    createAccount,
    login,
    googleLogin,
    logout
}