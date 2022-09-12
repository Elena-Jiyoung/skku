import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    height: 100%;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    letter-spacing: -0.02em;
    height: 100%;
  }

  #root {
    height: 100%;
    --font-size-1: 0.64rem;
    --font-size-2: 0.8rem;
    --font-size-3: 1rem;
    --font-size-4: 1.25rem;
    --font-size-5: 1.563rem;
    --font-size-6: 1.953rem;
    --font-size-7: 2.441rem;
    --font-size-8: 3.052rem;
  }

`;

export default GlobalStyle;
