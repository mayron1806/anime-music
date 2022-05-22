import styled from "styled-components";

export const NameContainer = styled.div`
    position: relative;
    transition: .5s;
    label{  
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        font-size: 1.6rem;
        margin-left: 0.5rem;
        color: var(--black);
        transition: .5s;
        cursor: text;
    }
    input{
        background-color:transparent;   
        border: 1px solid var(--black);
        border-radius: 3px;
        width:100%;
        height: 100%;
        color:var(--black);
        transition:0.5s;
        padding: 1rem;
        font-size: 1.6rem;
    }
    &.active{
        label{
            top: 0;
            background-color: var(--white);
        }
        input{
            border-color: var(--main);
        } 
    }
`;