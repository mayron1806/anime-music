import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const defaultImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main);
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    border: 2px solid var(--main);
    box-shadow: 
    0 0 1rem var(--transparent),
    0 0 2rem var(--transparent);
`;
export const Image = styled.div<{url: string}>`
    background: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    border: 2px solid var(--main);
    box-shadow: 
    0 0 1rem var(--transparent),
    0 0 2rem var(--transparent);
`;