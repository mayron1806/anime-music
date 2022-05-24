import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--white);
    display: flex;
    .left{
        background-color: var(--main);
        height: 100%;
        padding: 2% 0;
        width: 30vw;
        color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right{
        height: 100%;
        margin-left: 2rem;
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        .create{
            color: var(--black);
            font-size: 2rem;
            text-decoration: underline;
        }
        .create:hover{
            color: var(--main);
        }
    }
`;
export const SiteInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;  
export const Title = styled.h2`
    font-size: 4rem;
`;
export const ContactArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 2.5rem;
        width: 50%;
        text-align: center;
    }
    .link-area{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        gap: 5rem;
        width: 100%;
    }
`;
export const Link = styled.a`
    color: var(--white);
`;
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5rem;
    .title{
        font-size: 3rem;
        margin-bottom: 2rem;
        color: var(--black);
    }
    input[type="submit"]{
        background-color: var(--main);
        padding: 1rem;
        border-radius: 1rem;
        color: var(--white);
        font-size: 2rem;
        font-weight: 600;
        cursor: pointer;
    }
`;
export const OR = styled.span`
    color: var(--gray);
    width: 100%;
    text-align: center;
    font-size: 2rem;
    position: relative;
    ::before{
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid var(--gray);
        width: 45%;
    }
    ::after{
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid var(--gray);
        width: 45%;
    }
`;
export const GoogleLogin = styled.div`
    cursor: pointer;
    background-color: var(--main);
    color:var(--white);
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    p{
        font-size: 2rem;
    }
`;