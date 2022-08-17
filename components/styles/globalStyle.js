import { createGlobalStyle } from "styled-components";

export const GlobalStyling = createGlobalStyle`
    
    body{
        padding:0;
        margin:0;
        font-family: 'Nunito Sans', sans-serif;
        box-sizing: border-box;
    }
    ul{
        list-style-type:none;
    }
    p,h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    img{
        width:100%;
    }
`;
