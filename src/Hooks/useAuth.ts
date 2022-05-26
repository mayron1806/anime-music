import { useEffect, useState } from "react"
import { User } from "../types/User"

export const useAuth = () => {
    const [user, setUser] = useState<User>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(()=>{
        const userSTR = localStorage.getItem("user");
        // has user
        if(userSTR !== null){
          setUser(JSON.parse(userSTR) as User);
          setIsAuthenticated(true);
        }
    }, [])
    const logOut = () => {
        localStorage.removeItem("user");
        setUser(undefined);
        setIsAuthenticated(false);
    }
    const login = (user: User)=>{
        if(user !== undefined){
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            setIsAuthenticated(true);
            window.location.href = "/";
        }

    }
    return{user, isAuthenticated, logOut, login}
}