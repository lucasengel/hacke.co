import styled from "styled-components"

export const Container = styled.main`
  padding: 1.5rem 3rem;

  h2 {
    border-bottom: 2px solid var(--mustard);
    color: var(--white);
    font-weight: 700;
    font-size: 1.8rem;
    margin: 1rem 0;
    padding-bottom: 0.6rem;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    padding: 1.5rem 0;
  }
`
