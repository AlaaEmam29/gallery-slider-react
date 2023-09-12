import React from "react";
import styled, { css } from "styled-components";
const StyledBox = styled.div`
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: skew(-20deg);
  transition: all 0.5s ease-in-out;
  background-image: url(${({ image }) => image});
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    transform: skew(0deg);
  }
`;
export default function Box({ data }) {
  const {
    artist: { image: imageArtist, name: nameArtist },
    images: {
      hero: { large: imageLarge, small: imageSmall },
    },
    nameImg,
    source,
    year,
    description,
  } = data;
  return <StyledBox image={imageLarge} />;
}
