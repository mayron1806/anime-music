import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--main);
    display: grid;
    grid-template-columns: 30vw 1fr;
    grid-template-areas: 
    "header main"
    "contact main";
    main{
        grid-area: main;
        background-color: var(--white);
        padding: 2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
            font-size: 2rem;
            margin-top: 2rem;
            color: var(--main);
        }
        a:hover{
            text-decoration: underline;
        }
    }
    @media (max-width: 800px){
        grid-template-columns: 40vw 1fr;
    }
    @media (max-width: 550px){
        grid-template-columns: 1fr;
        grid-template-areas: 
        "header"
        "main"
        "contact";
    }
`;
export const SiteInfo = styled.div`
    color: var(--white);
    grid-area: header;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    align-self: flex-start;
    margin-top: 2rem;
    @media (max-width: 550px){
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 2rem;
        .app-icon{
            height: 7rem;
        }
    }
`;  
export const Title = styled.h2`
    font-size: 3rem;
    @media (max-width: 350px){
        font-size: 2.5rem;
    }
`;
export const FormTitle = styled.h2`
    font-size: 3rem;
    color: var(--main);
`;
export const ContactArea = styled.div`
    grid-area: contact;
    align-self: flex-end;
    color: var(--white);
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 2.5rem;
    background-color: var(--main);
    margin-bottom: 2rem;
    p{
        width: 70%;
        text-align: center;
    }
    .link-area{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        gap: 5rem;
        width: 100%;
    }
    @media (max-width: 550px){
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 2rem;
        .app-icon{
            height: 7rem;
        }
    }
`;
export const Link = styled.a`
    color: var(--white);
`;
export const Form = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    input[type="submit"]{
        background-color: var(--main);
        padding: 1rem;
        border-radius: 1rem;
        color: var(--white);
        font-size: 2rem;
        font-weight: 600;
        cursor: pointer;
    }
    @media (max-width: 800px){
        width: 90%;
    }
   
`;
export const OR = styled.span`
    display: block;
    color: var(--gray);
    width: 70%;
    text-align: center;
    font-size: 2rem;
    position: relative;
    margin-bottom: 2rem;
    ::before{
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid var(--gray);
        width: 40%;
    }
    ::after{
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid var(--gray);
        width: 40%;
    }
    @media (max-width: 800px){
        width: 90%;
    }
`;
export const GoogleLogin = styled.div`
    cursor: pointer;
    background-color: var(--main);
    color:var(--white);
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    p{
        font-size: 2rem;
    }
    @media (max-width: 800px){
        width: 90%;
    }
`;
export const ErrorMessage = styled.p`
    text-align: center;
    color: var(--error);
    font-size: 2rem;
`;