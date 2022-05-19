import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        border:0;
        box-sizing: border-box;
        text-decoration:none;
        margin:0;
    }
    html{
        font-size 62.5%;
        font-family: 'Roboto Flex', sans-serif;
    }
    :root{
        --black: #2D2A2A;
        --white: rgba(244, 244, 244, 0.9);
        --white-transparent: rgba(44, 44, 44, 0.1);
        --main: #18BDC8;
    }
    body{
        width:100vw;
        height:100vh;
        background-color: var(--white-transparent);
    }
`;