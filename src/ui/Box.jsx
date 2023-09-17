import React, { useEffect, useState } from "react";
import styled, { css ,keyframes} from "styled-components";

const StyledBox = styled.div`
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: skew(-20deg);
  transition: all 0.5s ease-in-out;
  background-image: url(${({ image }) => image});
`;
export default function Box({ data , index , currentPage }) {
let imageLarge = '';
if(index === 5){
 
  imageLarge = data.images.hero.large;
}
else {
   imageLarge = data;
}
return <StyledBox image={imageLarge} />;
}
