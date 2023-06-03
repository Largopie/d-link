import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after{
        box-sizing: border-box;
    }

    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }

    ol, ul, li {
        list-style: none;
    }

    img {
        display: block;
    }
`;

export default GlobalStyle;