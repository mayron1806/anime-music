import { useEffect, useState } from "react"
import { User } from "../types/User"
import { 
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { app } from "../services/firebase";
import { firestore } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const firebaseApp = app;

const auth = getAuth();

export const useAuth = () => {
    const [user, setUser] = useState<User>();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            // se user for diferente de null significa que tem um usuario logado
            if(user){
                const u : User = {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email
                }
                // verifica se o user é adm
                const userFirestoreRef = doc(firestore, `users/${user.uid}`);
                getDoc(userFirestoreRef)
                .then((res)=>{
                    u.adm = res.data()?.adm;
                })
                setUser(u);
            }else{
                setUser(undefined);
            }
        })
    }, [])
    
    return {
        user
    };
}