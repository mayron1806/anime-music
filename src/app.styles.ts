import styled from "styled-components";

export const Container = styled.div`
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
    height: calc(100% - 10rem);
    gap: 2rem;
  }
`;
export const ButtonForm = styled.div`
  cursor: pointer;
  position: absolute;
  
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  top:0;
  z-index: 100;
  right: 0;
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