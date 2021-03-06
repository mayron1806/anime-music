import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        border:0;
        box-sizing: border-box;
        text-decoration:none;
        margin:0;
        outline:none;
    }
    html{
        font-size: 62.5%;
        font-family: 'Roboto Flex', sans-serif;
    }
    :root{
        --black: #2D2A2A;
        --white: rgba(244, 244, 244);
        --gray: #D8D8D8;
        --main: #18BDC8;
        --error: #F53927;
        --transparent: rgba(0, 0, 0, 0.3);
    }
    body{
        width:100vw;
        height:100vh;
        background-color: var(--white);
    }
`;