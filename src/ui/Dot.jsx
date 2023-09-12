import styled from "styled-components";

const Dot = styled.div`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border: 1px solid #fff;
  border-radius: 50%;
  transition: background-color 0.6s ease;
  background-color: ${({ active }) => (active ? "#34d399" : "transparent")};
`;
export default Dot;
