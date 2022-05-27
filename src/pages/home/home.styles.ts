import styled from "styled-components";
import defaultBG from "../../images/bg.jpeg";
type bgProps = {
  backgroundURL?: string
}
const background = ({backgroundURL}: bgProps)=>{
  if(backgroundURL === undefined){
    return defaultBG;
  }
  return backgroundURL;
}
export const Container = styled.div<{backgroundURL? : string}>`
  background: url(${props=> background(props)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  .player{
    position: absolute;
    bottom: 0;
  }
  main{
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 20vh);
    gap: 2rem;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      justify-content: stretch;
    }
    @media (max-width: 500px) {
      padding: 1rem;
    }
  }
`;
export const BackgroundBlur = styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(0.5rem);
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  background-color: var(--white);
`;
export const ButtonForm = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  z-index: 100;
  position: relative;
  &:hover{
    background-color: var(--gray);
  }
  ::before, ::after{
    content: "";
    width: 4rem;
    height:  0.5rem;
    background-color: var(--black);
    position: absolute;
    border-radius: 1rem;
    transition: 0.5s;
  }
  ::before{
    top: 30%;
    transform: rotate(0);
  }
  ::after{
    transform: rotate(0);
    top: 65%;
  }
  &.active{
    ::before{
      top: 50%;
      transform: rotate(45deg) translate(-2px,-3px);
    }
    ::after{
      top: 50%;
      transform: rotate(-45deg) translate(2px, -2px);
    }
  }
`;