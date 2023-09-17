import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { SPLIT_SLIDER_COUNT } from "../utils/constant";
import { useImages } from "../context/contextImages";
import Skeleton from "react-loading-skeleton";
import Box from "./Box.jsx";

const slideAnimation = keyframes`
  from {
    transform: translateX(-100%) skew(-20deg);
  }
  to {
    transform: translateX(0) skew(-20deg);
  }

`;

const StyledSlider = styled.div`
  width: 75vw;
  display: grid;
  grid-column-gap: 1.6rem;
  position: relative;
  right: 22%;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 40% 1fr;
  transform: skew(-20deg);
  
  ${({ animate }) =>
    animate &&
    css`
      animation: ${slideAnimation} 0.8s ease-in-out forwards;
    `}
    @media only screen and (max-width: 376px){
      width: 100vw;
      grid-template-columns: 0.5rem 10% 1fr 1fr 1fr 30% 1fr;
      grid-column-gap: 0.6rem;
      right: 65%;

    }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    right: 20%;
    
    width: 100%;
    transform: skew(-10);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 30% 1fr;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    right: 35%;
    grid-template-columns: 15% 10% 10% 10% 15% 30% 10%;
    width: 85vw;
  }
  `;

const StyledSkeleton = styled(Skeleton)`
  height: 100%;
`;

export default function Slider() {
  const {
    state: { isLoading, images, currentPage },
  } = useImages();

  const [animate, setAnimate] = useState(false);

  const handlePageChange = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 800);
  };
  useEffect(() => {
    handlePageChange();
  }, [currentPage]);

  return (
    <StyledSlider animate={animate}>
      {Array.from({ length: SPLIT_SLIDER_COUNT }).map((_, index) => {
        if (images.length > 0 && !isLoading) {
          const data = images[currentPage];
          return (
            <Box
              data={data}
              key={index}
              index={index}
              currentPage={currentPage}
            />
          );
        } else {
          return (
            <StyledSkeleton
              key={index}
              baseColor="#18181b"
              highlightColor="#27272a"
            />
          );
        }
      })}
    </StyledSlider>
  );
}
