import { status } from "../../enums/status"
import { Result } from "../../types/Result"

import * as C from "./statusMessage.styles";

type props = {statusMessage : Result}
export const StatusMessage = ({statusMessage} : props)=>{
    return(
        <C.statusMessage status={statusMessage.status}>
            <p>{statusMessage.message}</p>
        </C.statusMessage>
    )
}