import styled from "styled-components"; 
import { status } from "../../enums/status";

const setColorByStatus = (s : status) => {
    if(s === status.ERROR){
        return "#F53927";
    }
    return "var(--main)";
}
export const statusMessage = styled.div<{status : status}>`
    color: ${(props) => setColorByStatus(props.status)};
    text-align: center;
`;