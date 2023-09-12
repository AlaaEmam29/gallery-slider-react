import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const Overlay = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--color-light);
`;
const StyledBody = styled.div`
  width: 100%;
  height: 85vh;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100000;
  overflow: hidden;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 10rem 1fr 1fr 10rem;
  gap: 5rem;
  color: var(--color-light);
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    overflow: auto;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  & > *:first-child {
    grid-column: 2/3;
  }
  & > *:nth-child(2) {
    grid-column: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
  }
  & > *:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }
  & > *:nth-child(4) {
    grid-column: 4 / 5;
    grid-row: 1 / -1;
  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    grid-template-rows: 50% 1fr;
    grid-row-gap: 2rem;
    & > *:first-child {
      grid-column: 1/-1;
      height: 100%;
      grid-row: 1 / 2;
    }
    & > *:nth-child(2) {
      grid-column: 1/-1;
    }
    & > *:nth-child(3) {
      position: absolute;
      bottom: 25%;
      left: 15%;
    }
    & > *:nth-child(4) {
      position: absolute;
      bottom: 25%;
      right: 15%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 5rem 1fr 2fr 5rem;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    grid-template-columns: 7rem 1fr 1fr 7rem;
    gap: 3rem;
  }
`;
const Img = styled.img`
  width: 50rem;
  height: 100%;
  object-fit: cover;
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    width: 100%;
    height: inherit;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    height: 50%;
  }
`;
const Box = styled.div`
  padding: 3rem 2rem;
  z-index: 5;
  position: absolute;
  top: -1%;
  left: 50%;
  background-color: var(--color-light);
  color: var(--color-dark);
  width: 55%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    top: 40%;
    left: 0%;
  }
`;
const StyledContainer = styled.div`
  position: relative;
`;
const Author = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`;
const Button = styled.div`
  align-self: center;
  text-align: center;
`;
const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 10000;
  svg {
    fill: var(--color-dark);
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  &:hover {
    svg {
      fill: #34d399;
    }
  }
`;
const ThemeButton = styled.button`
  all: unset;
  position: absolute;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  z-index: 10000000;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
const Year = styled.span`
  font-family: "Schoolbell", cursive;
  font-size: 25rem;
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: -15%;
  color: var(--color-dark);
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    top: -10%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1300px) {
    top: -15%;
  }
`;
const Description = styled.p`
  line-height: 1.8;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: var(--color-dark-opacity);
  margin-top: 10rem;
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    margin-top: 0;
    padding: 0 8rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top: 0;
    padding: 0 2rem;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    margin-top: 2rem;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const Model = ({ children, activeModel }) => {
  return createPortal(
    <>
      <Overlay activeModel={activeModel} />
      <StyledBody activeModel={activeModel}>{children}</StyledBody>{" "}
    </>,
    document.body,
  );
};
const Close = ({ children, onClick }) => {
  return createPortal(
    <CloseButton onClick={onClick}>{children}</CloseButton>,
    document.body,
  );
};
const Theme = ({ children, onClick }) => {
  return createPortal(
    <ThemeButton onClick={onClick}>{children}</ThemeButton>,
    document.body,
  );
};

Model.Container = Container;
Model.Img = Img;
Model.Box = Box;
Model.Description = Description;
Model.Author = Author;
Model.Button = Button;
Model.Year = Year;
Model.Close = Close;
Model.Theme = Theme;
export default Model;
