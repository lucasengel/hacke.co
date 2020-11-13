import styled from "styled-components"

export const Container = styled.main`
  ul {
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    display: grid;
    gap: 3rem;
  }

  @media (max-width: 700px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`
