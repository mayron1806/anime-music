import { Children} from "react"
import {Navigate} from "react-router-dom";

type props ={
    condition: boolean,
    redirectTo: string,
    children: JSX.Element
}
export const PagesProtector = ({condition, redirectTo, children}: props) => {
    if(condition){
        return children
    }
    return(<Navigate to={redirectTo} replace />)
}