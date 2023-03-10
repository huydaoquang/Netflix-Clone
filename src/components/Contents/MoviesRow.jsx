import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

import { SmoothHorizontalScrolling } from "../../utils";
import { useViewPort } from "../hooks/useViewport";

const MoviesRow = (props) => {
  const { movies, title } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewPort();

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <MoviesRowContainer draggable="false">
      <h1 className="heading">{title}</h1>
      <MoviesSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
              ${
                windowWidth > 1200
                  ? "360px"
                  : windowWidth > 992
                  ? "300px"
                  : windowWidth > 768
                  ? "250px"
                  : "200px"
              }
              )`,
              }
            : {}
        }
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movieItem"
            ref={movieRef}
            draggable="false"
          >
            <img src={movie} alt="" draggable="false" />
            <div className="movieName">{title}</div>
          </div>
        ))}
      </MoviesSlider>
      <div className="btnLeft" onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </MoviesRowContainer>
  );
};

export default MoviesRow;

const MoviesRowContainer = styled.div`
  background-color: rgb(1, 0, 1);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft {
    left: 30px;
  }

  .btnRight {
    right: 30px;
  }

  .btnLeft,
  .btnRight {
    position: absolute;
    top: 50%;
    z-index: 20;

    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
  }
`;
const MoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5;
  }

  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 9;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;
