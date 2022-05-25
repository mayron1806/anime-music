import styled from "styled-components";
const progress = (percent: string) => {
    return `
        background: linear-gradient(to right,
            var(--main) ${percent}, 
            var(--gray)  ${percent}, 
            var(--gray) 100%);
    `;
}

export const ProgressBar = styled.input<{width?: string, percent: string}>`
    width: ${props => props.width ?? "100%"};
    height: 5px;
    -webkit-appearance: none;
    background-color: var(--gray);
    outline: none;
    border-radius: 1rem;
    position: relative;
    cursor: pointer;
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: var(--main);
        transform: translateY(-5px);
    }
    &::-webkit-slider-runnable-track{
        height: 5px;
        ${props => progress(props.percent)}
    }
`;