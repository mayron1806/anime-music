import styled from "styled-components"; 
import { status } from "../../enums/status";

const setColorByStatus = (s : status) => {
    if(s === status.ERROR){
        return "#F53927";
    }
    return "var(--main)";
}
export const statusMessage = styled.div<{status : status}>`
    margin-top: 2rem;
    color: ${(props) => setColorByStatus(props.status)};
    font-size: 1.6rem;
    text-align: center;
`;