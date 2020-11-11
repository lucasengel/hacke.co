import styled from "styled-components"

export const Container = styled.aside`
  background: var(--white);
  color: var(--grey);
  font-size: 1.4rem;
  text-align: center;
  width: 25rem;

  img {
    display: block;
    margin: 0;
    width: 250px;
  }

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin: 0;
  }

  h2,
  h3 {
    color: var(--blue);
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 400;
    text-align: center;
  }

  hr {
    border: 0;
    border-bottom: 1px dashed #939598;
    margin: 2rem 0;
  }

  p {
    margin: 0.5rem 0 2rem;
  }

  a {
    color: var(--dark);
    display: inline-block;
    font-weight: 400;
    position: relative;
    transition: transform 250ms ease, color 250ms ease;

    &:before {
      background-color: var(--pink);
      bottom: 0px;
      content: "";
      height: 0.2rem;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      transition: width 250ms ease 0s, height 250ms ease 0s;
      width: 100%;
      z-index: -1;
    }

    &:hover {
      color: var(--mustard);
      transform: skew(-3deg, -3deg);

      &:before {
        height: 105%;
        width: 110%;
      }
    }
  }

  header {
    background: var(--blue);
    color: var(--white);
    padding: 1rem 0;
    text-align: center;

    small {
      letter-spacing: 0.1rem;
      font-variant: small-caps;
      text-transform: uppercase;
    }
  }

  .bio {
    padding: 4rem 2.5rem 0;
  }

  .bio-desc {
    text-align: center;
  }

  @media (max-width: 700px) {
    margin: 0 auto;
    box-shadow: var(--shadow);

    img {
      width: 100%;
    }
  }
`
