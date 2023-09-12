import React from "react";
import Wrapper from "./Wrapper";
import Slider from "./Slider";
import styled from "styled-components";
import Controls from "./Controls";
import Container from "./Container";
import InfoComponent from "./Info";
import VerifyImg from "./VerifyImg";
import iconVerify from "/imgs/verfiyIcon.png";
import { useImages } from "../context/contextImages";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import GoToSource from "./GoToSourse";
import SlideShow from "./SlideShow";
import Dot from "./Dot";
import Dots from "./Dots";

const StyledAppLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;
`;
const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export default function AppLayout() {
  const {
    state: { isLoading, images, currentPage, activeModel },
    handleNextPage,
    handlePrevPage,
    goToSlide,
  } = useImages();
  return (
    <StyledAppLayout className="app-container">
      <Wrapper>
        <Slider />
        <Container>
          <Controls />
          <InfoComponent>
            <InfoComponent.Buttons className="prev" onClick={handlePrevPage}>
              <AiOutlineLeft />
            </InfoComponent.Buttons>
            <InfoComponent.Body>
              {isLoading ? (
                <Skeleton
                  width={200}
                  count={5}
                  baseColor="#18181b"
                  highlightColor="#27272a"
                />
              ) : (
                <>
                  <InfoComponent.Title>
                    <VerifyImg src={iconVerify} alt="verify icon" />
                    <Name>{images[currentPage]?.name || "UNKNOWN"}</Name>
                  </InfoComponent.Title>
                  <InfoComponent.Description>
                    {images[currentPage]?.description || "No description"}
                  </InfoComponent.Description>
                </>
              )}
            </InfoComponent.Body>

            <InfoComponent.Buttons className="next" onClick={handleNextPage}>
              <AiOutlineRight />
            </InfoComponent.Buttons>
          </InfoComponent>

          <GoToSource href={images[currentPage]?.source} target="_blank">
            go to source
          </GoToSource>
        </Container>
      </Wrapper>
      {activeModel && <SlideShow />}
      <Dots>
        {Array.from({ length: 3 }).map((_, index) => (
          <Dot
            key={index}
            active={index === currentPage}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Dots>
    </StyledAppLayout>
  );
}
