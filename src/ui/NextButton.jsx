import React from "react";
import styled from "styled-components";
const StyledNextButton = styled.button`
  all: unset;
  cursor: pointer;
  svg {
    width: 5rem;
    stroke: var(--color-dark);
    height: 5rem;
  }
`;
export default function NextButton({ onClick }) {
  return (
    <StyledNextButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
            strokeWidth="2"
          />
          <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
        </g>
      </svg>
    </StyledNextButton>
  );
}
