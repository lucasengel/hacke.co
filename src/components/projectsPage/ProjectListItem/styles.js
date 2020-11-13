import styled from "styled-components"

export const Container = styled.li`
  background-color: transparent;
  border-radius: 1rem;
  position: relative;
  transition: transform 1s ease;
  width: 1fr;

  &:after {
    border-radius: 1rem;
    box-shadow: 0 0 3rem var(--shadow-color);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    opacity: 0;
    transition: opacity 250ms ease;
    top: 0;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);

    &:after {
      opacity: 1;
    }
  }

  div {
    padding: 1rem 1.5rem 1.5rem;
  }

  h2 {
    color: var(--white);
    border-bottom: 0.2rem solid var(--mustard);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
  }

  > img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    height: 20rem;
    object-fit: cover;
    object-position: top;
    position: relative;
    width: 100%;
  }

  .git {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    opacity: 0.7;
    transition: opacity 250ms ease;

    &:hover {
      opacity: 1;
    }

    img {
      filter: invert(97%) sepia(12%) saturate(14%) hue-rotate(287deg)
        brightness(106%) contrast(96%);
      max-width: 3rem;
      max-height: 3rem;
    }
  }
`
