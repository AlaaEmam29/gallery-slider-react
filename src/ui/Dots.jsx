import styled from "styled-components";
import Dot from "./Dot";
import { useImages } from "../context/contextImages";

const StyledDots = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  z-index: 5;
`;
const Dots = () => {
  const {state , goToSlide } = useImages();
  const { images, currentPage } = state;
  return (
    <StyledDots>
      {
          images && images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentPage}
              onClick={() => goToSlide(index)}
            />
          ))
        }
    </StyledDots>
  );
};
export default Dots;
