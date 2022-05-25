import styled from "styled-components";

export const Container = styled.div`
   height: 5rem;
   display: flex;
   align-items: center;
`;
export const UserContent = styled.div`
    &.active{
        h2{
            color: var(--main);
        }
        .exit-button{
            transform: translateY(0);
        }
    }
    position: relative;
`;
export const Title = styled.h2`
    font-size: 2rem;
    color: var(--black);
    cursor: pointer;
    text-overflow: ellipsis;
    max-width: 100rem;
    white-space: nowrap;
    overflow: hidden;
    :hover{
        color: var(--main);
    }
`;
export const Link = styled.a`
    font-size: 2rem;
    color: var(--black);
    text-decoration: underline;
    :hover{ 
        color: var(--main);
    }
`;
export const Exit = styled.div`
    min-width: 6rem;
    max-width: 8rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 2rem;
    transform: translateY(100%);
    border-radius: 0.5rem;
    overflow: hidden;
    .exit-button{
        border: 1px solid var(--error);
        border-radius: 1rem;
        width: 100%;
        padding: 0.5rem;
        cursor: pointer;
        background-color: var(--white);
        font-size: 1.6rem;
        color: var(--error);
        font-weight: 600;
        transform: translateY(-200%);
        transition: 0.5s;
        &:hover{
            background-color: var(--error);
            color:var(--white);
        }
    }
`;