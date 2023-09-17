import React from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  gap: 5rem;
  transform: translateY(-50%);
  @media only screen and (max-width: 376px){
    width: 85%;
    height: 25rem;
    right: 85%;
    background: rgba(0, 0, 0, 0.5);

 

  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    top: 60%;
  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    width: 40rem;
    right: -20%;
    border-radius: 1rem;
  }
`;
const StyledButtons = styled.button`
  all: unset;
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  background-color: transparent;
  cursor: pointer;
  z-index: 100;

  svg {
    fill: #fff;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
  }

  ${({ className }) =>
    className === "prev" &&
    css`
      left: 65%;
    `}
  ${({ className }) =>
    className === "next" &&
    css`
      right: 1rem;
    `}
&:hover {
    svg {
      fill: #34d399;
    }
  }
  @media only screen and (max-width: 376px){
    transform: translateY(-50%);
    svg {
      fill: #34d399;
    }
    top: 50%;

    ${({ className }) =>
      className === "prev" &&
      css`
        left: 0%;
      `}
    ${({ className }) =>
      className === "next" &&
      css`
        right: 0%;
      `}

  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: #34d399;
    }
    ${({ className }) =>
      className === "prev" &&
      css`
        left: 30%;
      `}
    ${({ className }) =>
      className === "next" &&
      css`
        right: 15%;
      `}
  }
  @media only screen and (min-width: 450px) and (max-width: 550px) {
    ${({ className }) =>
      className === "prev" &&
      css`
        left: 10%;
      `}
  }
  @media only screen and (min-width: 550px) and (max-width: 650px) {
    ${({ className }) =>
      className === "prev" &&
      css`
        left: 20%;
      `}
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    top: 60%;

    ${({ className }) =>
      className === "prev" &&
      css`
        left: 50%;
      `}
    ${({ className }) =>
      className === "next" &&
      css`
        right: 3%;
      `}
  }
`;
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  p {
    font-size: 1.4rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.5);
  }
  @media only screen and (max-width: 376px){
    p{
      font-size: 1rem ;

    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 40rem;
    position: relative;
    left: -70%;
    padding: 2rem 5rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    p {
      color: #fff;
    }
  }
`;
const StyledTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
function Info({ children }) {
  return <StyledInfo>{children}</StyledInfo>;
}
function Body({ children }) {
  return <StyledBody>{children}</StyledBody>;
}
function Description({ children }) {
  return <p>{children}</p>;
}
function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
function Buttons(props) {
  return createPortal(
    <StyledButtons {...props} />,
    document.getElementById("root"),
  );
}
Info.Body = Body;
Info.Title = Title;
Info.Description = Description;
Info.Buttons = Buttons;

export default Info;
