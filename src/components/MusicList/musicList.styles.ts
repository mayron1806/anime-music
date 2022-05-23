import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: calc(100% - 10rem);
    display: flex;
    flex-direction: column;
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    border-bottom: 1px solid var(--white);
    p{
        font-size: 2.5rem;
    }
`;
export const MusicsContainer = styled.div`
    background-color: var(--white);
    margin-top: 1rem;
    height: calc(100% - 10rem);
    overflow-y:scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    ::-webkit-scrollbar {
        width: 0;
    }
`;