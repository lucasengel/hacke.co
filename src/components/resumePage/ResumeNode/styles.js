import styled from "styled-components"

export const Container = styled.section`
  margin-bottom: 2rem;

  > div {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    h3 {
      color: var(--mustard);
      font-size: 1.6rem;
      font-weight: 400;
      text-transform: uppercase;
    }

    span {
      font-size: 1.4rem;
    }
  }

  small {
    color: var(--white);
    font-size: 1.2rem;
    font-variant: small-caps;
    letter-spacing: 0.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  ul {
    list-style: circle;
    margin-left: 2rem;
    padding: 0;

    li {
      font-size: 1.4rem;
    }
  }

  p {
    color: var(--white-f1);
    font-size: 1.4rem;
    line-height: 1.4;
    margin: 0.7rem 0;
    text-align: justify;
  }

  @media (max-width: 700px) {
    div {
      flex-direction: column;
    }
  }
`
