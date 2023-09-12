import React from "react";
import Model from "./Model";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { AiOutlineClose } from "react-icons/ai";
import SunImg from "/imgs/sun.svg";
import MoonImg from "/imgs/moon.svg";
import SvgTheme from "./SvgTheme";
import { useImages } from "../context/contextImages";

export default function SlideShow() {
  const {
    state: { images, currentPage, activeModel, darkMode },
    handleNextPage,
    handlePrevPage,
    handleToggleModel,
    handleToggleDarkMode,
  } = useImages();
  const currentImage = images[currentPage];
  return (
    <>
      <Model activeModel={activeModel}>
        <Model.Theme onClick={handleToggleDarkMode}>
          {darkMode ? (
            <SvgTheme src={SunImg} alt="sun" />
          ) : (
            <SvgTheme src={MoonImg} alt="moon" />
          )}
        </Model.Theme>
        <Model.Close onClick={handleToggleModel}>
          <AiOutlineClose />
        </Model.Close>
        <Model.Container>
          <Model.Img src={currentImage?.url} alt={currentImage?.name} />
          <Model.Box>
            <h2>{currentImage?.name}</h2>

            <p>{currentImage?.artist?.name}</p>
          </Model.Box>
        </Model.Container>
        <Model.Container>
          <Model.Year>{currentImage?.year}</Model.Year>
          <Model.Description>{currentImage?.description}</Model.Description>
          <Model.Author
            src={currentImage?.artist?.image}
            alt={currentImage?.artist?.name}
          />
        </Model.Container>
        <Model.Button>
          <PrevButton onClick={handlePrevPage} />
        </Model.Button>
        <Model.Button>
          <NextButton onClick={handleNextPage} />
        </Model.Button>
      </Model>
    </>
  );
}
