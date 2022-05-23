import styled from "styled-components";

const selectedMusic = ()=>{
    return `
        width:100%;
        background-color: var(--main);
        color:var(--white);
        box-shadow:2px 2px 15px rgba(0, 0, 0, 0.2);
    `;
}

export const Container = styled.div<{active: boolean}>`
    cursor: pointer;
    width: 95%;
    height: 5rem;
    background-color: var(--gray);
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 600;
    font-size: 1.6rem;
    transition: .5s;
    .id{
        font-size: 2rem;
    }
    .main-info{
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 90%;
    }
    ${props=> props.active ? selectedMusic() : ""}

`;
export const Name = styled.p`
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
`;