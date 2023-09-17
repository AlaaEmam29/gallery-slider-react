import React from "react";
import Wrapper from "./Wrapper";
import Slider from "./Slider";
import styled from "styled-components";
import Controls from "./Controls";
import Container from "./Container";
import { useImages } from "../context/contextImages";
import GoToSource from "./GoToSourse";
import SlideShow from "./SlideShow";
import Dots from "./Dots";
import InfoImages from "./InfoImages";

const StyledAppLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;
`;


export default function AppLayout() {
  const {state: {  images, currentPage, activeModel }} = useImages();
  return (
    <StyledAppLayout className="app-container">
      <Wrapper>
        <Slider />
        <Container>
          <Controls />
        <InfoImages/>

          <GoToSource href={images[currentPage]?.source} target="_blank">
            go to source
          </GoToSource>
        </Container>
      </Wrapper>
      {activeModel && <SlideShow />}
      <Dots />
        
    </StyledAppLayout>
  );
}
