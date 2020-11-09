import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --fonts: Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --pink: #e56399;
    --purple-l1: #333867;
    --purple: #22223b;
    --white: #e3e7ee;
    --white-f1: #e3e7ee99;
    --white-f2: #e3e7ee66;
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
    color: var(--white);
    font-size: 1.6rem;
    min-height: 100vh;
    font-family: var(--fonts);
  }

  h1, h2 {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.6rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`

export default GlobalStyles
