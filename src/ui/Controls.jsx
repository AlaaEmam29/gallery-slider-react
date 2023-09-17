import React from "react";
import { styled } from "styled-components";
import SeeAll from "./SeeAll";
import { useImages } from "../context/contextImages";
const StyledControls = styled.div`
  width: inherit;
  @media only screen and (max-width: 376px){
    height: fit-content;
    position: relative;
    bottom: 10%;
    right: 80%;  
      text-align: center;
  }

  @media only screen and (min-width: 376px) and (max-width: 768px) {
    width: 100%;
    height: fit-content;
    position: relative;
    bottom: 55%;
    left: 55%;
    text-align: center;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 100%;
    height: fit-content;
    margin-left: 3rem;
  }
`;
export default function Controls() {
  const { handleToggleModel } = useImages();
  return (
    <StyledControls>
      <SeeAll onClick={handleToggleModel}>see all</SeeAll>
    </StyledControls>
  );
}
