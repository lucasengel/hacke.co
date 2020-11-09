import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }
`

export const Logo = styled.div`
  transition: all 250ms ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 700px) {
    margin-bottom: 1.6rem;
  }

  a {
    align-items: center;
    color: var(--white);
    display: flex;
    text-decoration: none;
  }

  svg {
    fill: var(--pink);
    height: 4rem;
  }

  span {
    font-size: 2.8rem;
    font-weight: 700;
    margin-left: 2rem;
  }
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  ul {
    align-items: center;
    display: flex;
    justify-content: stretch;
    list-style: none;
    margin-right: auto;

    li {
      font-size: 1.6rem;
      height: 100%;
      margin: 0.5rem;
    }

    a {
      border-radius: 0.3rem;
      color: var(--white-f1);
      padding: 0.5rem 1rem;
      text-decoration: none;

      &:hover,
      &.active {
        background: var(--white-f2);
        color: var(--purple);
      }
    }
  }
`
