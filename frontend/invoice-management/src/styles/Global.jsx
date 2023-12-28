import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(180deg, #727276 0%, #ded9d9 70%);        font-family: Arial, Helvetica, sans-serif;
        overflow-x: hidden ;
        overflow-y: auto;
    }
`;

export default GlobalStyle;