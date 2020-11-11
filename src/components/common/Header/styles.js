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
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.03);

    a {
      color: var(--mustard);
    }
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
    transition: color 250ms ease;
  }
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  ul {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin-right: auto;

    li {
      height: 100%;
      margin: 0.5rem;
    }

    a {
      align-items: center;
      background-color: transparent;
      border-radius: 0.3rem;
      color: var(--white-f1);
      display: flex;
      padding: 0.5rem 1rem;
      text-decoration: none;
      transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

      svg {
        margin-right: 0.6rem;
      }

      &:hover,
      &.active {
        background-color: var(--white-f2);
        color: var(--purple);
      }
    }
  }
`
