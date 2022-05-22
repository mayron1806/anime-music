import styled, { keyframes } from "styled-components";

const blockForm = (isUploading: boolean) =>{
    if(isUploading){
        return `
            ::before{
                content: "";
                width: 100%;
                height: 100%;
                background-color: var(--white-transparent);
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
            }
        `;
    }
}
export const Form = styled.form<{isUploading: boolean, isActive: boolean}>`
    z-index: 5;
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--white);
    padding: 1rem;
    height: 100%;
    min-width: 40vw;
    max-width: 50vw;
    box-shadow: -4px 0 4px var(--white-transparent);
    transition: .5s;
    transform: translateX(${props => props.isActive ? "0%" : "110%"});
    input[type="text"], .upload, .submit{
        pointer-events: ${props => props.isUploading ? "none" : "initial"};
    }
    ${props => blockForm(props.isUploading)}
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
export const Submit = styled.input`
    font-size: 1.6rem;
    font-weight: 600;
    width:100%;
    padding: 1rem; 
    cursor:pointer;
    background-color:var(--main);
    color:var(--white);
    position: relative;
    border-radius: 0.5rem;
    &::before{
        content: "";
        width: 5rem;
        height: 5rem;
        background-color: var(--white-transparent);
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 20;
    }
`;

const loadingAnim = keyframes`
    0%{
        transform: Rotate(0deg);
    }
    100%{
        transform: Rotate(360deg);
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
`;