import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  .frame {
    border-radius: 50%;
    border: 0.5rem solid var(--white);
    box-shadow: var(--shadow);
    display: flex;
    place-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 20rem;
    margin-left: 4rem;
    overflow: hidden;
    width: 20rem;

    img {
      transition: transform 250ms ease-in-out;
      width: 20rem;

      &:hover {
        transform: scale(1.15);
      }
    }
  }

  p {
    color: var(--white-f2);
    font-size: 2.8rem;
    line-height: 1.2;

    span {
      color: var(--mustard);
      display: block;
      font-size: 3.6rem;
      font-weight: 700;
      letter-spacing: 0.15rem;
      margin-bottom: 1rem;
    }

    & + p {
      color: var(--white-f1);
      font-size: 1.8rem;
      line-height: 1.6;

      a {
        color: var(--white);
        display: inline-block;
        font-weight: 400;
        position: relative;
        transition: transform 250ms ease, color 250ms ease;

        &:after {
          background-color: var(--blue);
          bottom: 0px;
          content: "";
          height: 0.3rem;
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

          &:after {
            height: 105%;
            width: 110%;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    p {
      font-size: 2.4rem;
      text-align: center;

      span {
        font-size: 3rem;
      }
    }

    .frame {
      height: 16rem;
      margin-left: 0;
      margin-bottom: 2rem;
      order: -1;
      width: 16rem;

      img {
        width: 16rem;
      }
    }
  }
`
