import React, { createContext, Dispatch } from "react";
import { User } from "../types/User";

type props = {
    user: User | undefined,
    isAuthenticated: boolean,
    logOut: () => void,
    login: (user: User)=> void
}
export const AuthContext = createContext<props>({} as props);