import styled, { keyframes } from "styled-components";
import { status } from "../../enums/status";

const blockForm = (isUploading: boolean) =>{
    if(isUploading){
        return `
            ::before{
                content: "";
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.1);
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
            }
        `;
    }
}
export const Form = styled.form<{isUploading: boolean, isActive: boolean}>`
    z-index: 10;
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--white);
    padding: 1rem;
    height: 100%;
    width: 50vw;
    box-shadow: -4px 0 4px var(--transparent);
    transition: .5s;
    transform: translateX(${props => props.isActive ? "0%" : "110%"});
    input[type="text"]{
        pointer-events: ${props => props.isUploading ? "none" : "initial"};
    }
    ${props => blockForm(props.isUploading)}
    @media (max-width: 600px) {
        width: 70vw;
    }
    @media (max-width: 400px) {
        width: 100vw;
    }
`;
export const Title = styled.h2`
    text-align:left;
    color: var(--main);
    font-size: 2rem;
    height: 5rem;
`;
export const FileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    margin: 1rem 0;
    .upload{
        width: 100%;
    }
`;
const submitContainerHeadler = (isUploading : boolean) => {
    if(isUploading){
        return`
            input{ color: var(--main); }
            div{ display: initial; }
        `;
    }
    return``;
}
export const SubmitContainer = styled.div<{isUploading: boolean}>`
    width:100%;
    position: relative; 
    ${props => submitContainerHeadler(props.isUploading)}
`;
export const Submit = styled.input<{isUploading: boolean}>`
    font-size: 1.6rem;
    font-weight: 600;
    height: 100%;
    width:100%;
    padding: 1.5rem; 
    cursor:pointer;
    background-color:var(--main);
    color: var(--white);
    border-radius: 0.5rem;
`;
const animation = keyframes`
    0%{
        transform: translate(-50%, -50%) rotate(0);
    }
    100%{
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;
export const submitAnim = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    border: 3px solid var(--white);
    animation: ${animation} 1s linear infinite;
    ::before{
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%, 10%);
        width: 1rem;
        height: 3rem;
        background-color: var(--main);
    }

`;

const setColorByStatus = (s : status) => {
    if(s === status.ERROR){
        return "var(--error)";
    }
    return "var(--main)";
}
export const StatusMessage = styled.p<{status : status}>`
    margin-top: 2rem;
    color: ${(props) => setColorByStatus(props.status)};
    font-size: 1.6rem;
    text-align: center;
`;