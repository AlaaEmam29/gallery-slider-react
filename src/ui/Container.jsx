import styled from "styled-components";

const StyledContainer = styled.div`
  width: inherit;
  padding: 1rem;
  height: 60rem;
  position: relative;
  right: 25%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
export default Container;
