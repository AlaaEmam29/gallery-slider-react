import React from "react";
import styled from "styled-components";
const StyledPrevButton = styled.button`
  all: unset;
  cursor: pointer;
  svg {
    width: 5rem;
    height: 5rem;
    stroke: var(--color-dark);
  }
`;
export default function PrevButton({ onClick }) {
  return (
    <StyledPrevButton onClick={onClick} aria-label="Previous">
      <svg xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
            strokeWidth="2"
          />
          <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
        </g>
      </svg>
    </StyledPrevButton>
  );
}
