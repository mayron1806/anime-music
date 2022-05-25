import styled from "styled-components";


type dropzone = {
    isDragAccept: boolean, 
    isDragReject: boolean,
    isAcceptFile: boolean
}
const mainColor = (props : dropzone) =>{
    if(props.isDragAccept || props.isAcceptFile){
        return "var(--main)";
    }
    if(props.isDragReject){
        return "var(--error)";
    }
    return "var(--gray)";
}
export const DropContainer = styled.div<dropzone>`
    border: 0.2rem dashed ${props => mainColor(props)};
    cursor: pointer;
    .dropZoneContent{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding:1rem;
        color:${props => mainColor(props)};
    }
`;
export const Message = styled.p`
    white-space: nowrap;
    max-width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 1.6rem;
`;