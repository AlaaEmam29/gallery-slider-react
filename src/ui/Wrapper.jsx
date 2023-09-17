import styled, { css } from "styled-components";
const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  grid-template-columns: auto 35rem;
  position: relative;
  & > * {
    height: 60rem;
    width: 100%;
  

  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    & > * {
    }
    & > *:first-child {
      grid-column: 1/-1;
      height: 75%;
      width: 95%;
    }
    & > *:nth-child(2) {
      /* background: rgba(0, 0, 0, 0.5); */
      position: absolute;
      width: 45%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 50%;
      border-radius: 1rem;
      h2 {
      }
      p {
        color: #fff;
        padding: 1rem 2rem;
      }
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: auto 15rem;
    & > *:nth-child(2) {
      height: 100%;
      width: 100%;
    }
  }
`;
export default Wrapper;
