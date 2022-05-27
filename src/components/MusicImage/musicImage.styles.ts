import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImageBase = styled.div`
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    border: 2px solid var(--main);
    box-shadow: 
    0 0 1rem var(--transparent),
    0 0 2rem var(--transparent);
    @media (max-width: 750px) {
        width: 25rem;
        height: 25rem;
    } 
    @media (max-width: 600px) {
        width: 20rem;
        height: 20rem;
    }
    @media (max-width: 500px) {
        width: 15rem;
        height: 15rem;
    }
`;
export const defaultImage = styled(ImageBase)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main);
`;
export const Image = styled(ImageBase)<{url: string}>`
    background: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;