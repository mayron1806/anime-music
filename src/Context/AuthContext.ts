import { createContext } from "react";
import { User } from "../types/User";

type props = {
    user: User | undefined
}
export const AuthContext = createContext<props>({user: undefined});