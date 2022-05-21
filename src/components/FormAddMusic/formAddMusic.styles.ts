import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: absolute;
    background-color:var(--white);
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius:1rem;
    color: var(--black);
    box-shadow: 4px 4px 4px var(--white-transparent);
`;
export const Form = styled.form`
    label{
        display:block;
        font-size:1.2rem;
        margin-bottom:0.5rem;
    }
    input[type="file"]{
        display:none;
    }
`;
export const Title = styled.h2`
    text-align:center;
    margin-bottom:1rem;
`;
export const Name = styled.input`
    background-color:transparent;
    border-bottom: 1px solid var(--black);
    width:100%;
    font-size:1.2rem;
    color:var(--black);
    margin-bottom:0.5rem;
    transition:0.5s;
    
    &:focus, &:hover{
        border-bottom: 1px solid var(--main);
        background-color:var(--white-transparent);
        padding:0.5rem;
    }
`;
export const FileRef = styled.label`
    background-color: var(--black);
    padding: 0.5rem;
    cursor: pointer;
    text-align: center;
    color:var(--white);
`;
export const Submit = styled.input`
    width:100%;
    padding:0.5rem; 
    cursor:pointer;
    margin-bottom:1rem;
    background-color:var(--main);
    color:var(--white);
`;

const loadingAnim = keyframes`
    0%{
        transform: Rotate(0deg);
    }
    100%{
        transform: Rotate(360deg);
    }
`;
const dotsAnim = keyframes`
    0%{
        content:"Adicionando";
    }
    25%{
        content:"Adicionando.";
    }
    50%{
        content:"Adicionando..";
    }
    100%{
        content:"Adicionando...";
    }
`;
export const LoadingContainer = styled.div`
    text-align:center;
    .animated{
        width: 5rem;
        height: 5rem;
        margin:1rem auto;
        border-radius:50%;
        border:1rem solid var(--white); 
        position: relative;
        
        animation:${loadingAnim} 1s linear infinite;
        &::before{
            content:"";
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, 0);
            width: 1.5rem;
            border-bottom: 3rem solid var(--main);
            border-left: 1.5rem solid transparent;
            border-right: 1.5rem solid transparent;
            height: 0;
        }
    }
    &::before{
        content:"Adicionando";
        font-size: 1.6rem;
        animation:${dotsAnim} 1s linear infinite;
    }
    
`;  