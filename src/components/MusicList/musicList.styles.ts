import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    background-color: var(--white);
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    border-bottom: 1px solid var(--gray);
    padding: 0.5rem 1rem;
    p{
        font-size: 2.5rem;
    }
`;
export const MusicsContainer = styled.div`
    padding-bottom: 1rem;
    overflow-y:scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    ::-webkit-scrollbar {
        width: 0;
    }
    p{
        font-size: 2rem;
    }
`;
export const NoMusic = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--black);
    p{
        font-size: 2rem;
        margin-top: 2rem;
    }
`;