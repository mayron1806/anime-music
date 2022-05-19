import styled from "styled-components"; 

export const Container = styled.div`
    width:100vw;
    height: 6rem;
    display:grid;
    grid-template-columns: 1fr 50vw 1fr;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
    "name buttons ."
    "name playback volume";
    align-items:center;
    background-color:var(--white);
`;
const Icons = styled.img`
    width:2rem;
    height:2rem;
`;
// name
export const MusicName = styled.p`
    grid-area:name;
    white-space:nowrap;
    width: 15rem;
    overflow: hidden; 
    text-overflow: ellipsis;
    font-size:1.3rem;
`;
// buttons
export const ButtonsContainer = styled.div`
    grid-area: buttons;
    display:flex;
    height:100%;
    width:100%;
    justify-content:space-evenly;
    align-items:center;
`;
export const previousMusic = styled(Icons)`
    cursor:pointer;
    transform: Rotate(180deg);
`;
export const PlayMusic = styled(Icons)`
    cursor:pointer;
`;
export const NextMusic = styled(Icons)`
    cursor:pointer;
`;
// playback bar
export const PlaybackContainer = styled.div`
    grid-area: playback;
    display:flex;
    justify-content: space-evenly; 
`;
export const PlaybackValue = styled.span`

`;
export const PlaybackBar = styled.input`
    width:80%;
    &::-webkit-slider-runnable-track{
        width: 100%;
        height: 0.1rem;
        cursor: pointer;
        animate: 0.2s;
        background: var(--white);
    }
    
    ::-webkit-slider-thumb {
        margin-top: -5px;
    }
`;
// volume
export const VolumeContainer = styled.div`
    grid-area: volume;
    display:flex;
    justify-content: space-evenly; 
`;
export const VolumeIcon = styled(Icons)`

`;
export const VolumeBar = styled.input`
    width: 80%;
    &::-webkit-slider-runnable-track{
        width: 100%;
        height: 0.1rem;
        cursor: pointer;
        animate: 0.2s;
        background: var(--white);
    }
    
    ::-webkit-slider-thumb {
        margin-top: -5px;
    }
`;  
