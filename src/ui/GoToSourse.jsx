import styled from "styled-components";

const GoToSourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const GoToSourceLink = styled.a`
  width: fit-content;
  background-color: rgb(255, 255, 255);
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);

  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: rgba(225, 225, 225, 0.9);
  }
  @media only screen and (min-width: 376px) and (max-width: 768px) {
    position: relative;
    top: 145%;
    left: 60%;
    padding: 1rem 2rem;
    margin-top: 7rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 1rem 2rem;
    width: 20rem;
    position: relative;
    left: -30%;
    bottom: 20%;
  }
`;
const GotoSource = (props) => {
  return (
    <GoToSourceContainer>
      <GoToSourceLink {...props} />
    </GoToSourceContainer>
  );
};
export default GotoSource;
