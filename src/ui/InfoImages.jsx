import React from 'react'
import InfoComponent from "./Info";
import VerifyImg from "./VerifyImg";
import iconVerify from "/imgs/verfiyIcon.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from 'styled-components';
import { useImages } from '../context/contextImages';
const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;
export default function InfoImages() {
    const {
        state: { isLoading, images, currentPage, activeModel },
        handleNextPage,
        handlePrevPage,
      } = useImages();
  return (
    <>
      <InfoComponent>
            <InfoComponent.Buttons className="prev" aria-label="Previous" onClick={handlePrevPage}>
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

            <InfoComponent.Buttons className="next" aria-label="Next" onClick={handleNextPage}>
              <AiOutlineRight />
            </InfoComponent.Buttons>
          </InfoComponent>
    </>
  )
}
