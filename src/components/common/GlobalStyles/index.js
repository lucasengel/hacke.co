import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --fonts: Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --shadow: 1rem 1rem 1.5rem #0009;
    --blue: #007ea7;
    --grey: #575f66;
    --mustard: #FFD447;
    --pink: #e56399;
    --purple: #22223b;
    --purple-l1: #383861;
    --teal: #55868c;
    --white: #fafafa;
    --white-f1: #fafafa99;
    --white-f2: #fafafa66;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    min-height: 100vh;
  }

  body {
    background: fixed no-repeat
      radial-gradient(farthest-side ellipse at 10% 0, var(--purple-l1) 20%, var(--purple));
    background-size: cover;
    color: var(--white-f1);
    font-size: 1.6rem;
    line-height: 1.8;
    min-height: 100vh;
    font-family: var(--fonts);
  }

  h1, h2 {
    margin-bottom: 2rem;
    color: var(--white-f1);
    font-weight: 400;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.6rem;
  }

  a {
    color: var(--white);
    text-decoration: none;
    transition: color 250ms ease;

    &:hover{
      color: var(--pink);
    }

  }
`

export default GlobalStyles
