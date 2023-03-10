import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

import * as ACTION from "../store/actions";
import MoviesRow from "./MoviesRow";
import useScrollY from "../hooks/useScrollY";

const ScrollToTop = () => {
  scroll.scrollToTop();
};

const Contents = () => {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();
  const {
    NetflixOriginals,
    TrendingMovies,
    ActionMovies,
    TopRatedMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTION.getNetflixOriginals());
    dispatch(ACTION.getTopRatedMovies());
    dispatch(ACTION.getTrendingMovies());
    dispatch(ACTION.getActionMovies());
    dispatch(ACTION.getComedyMovies());
    dispatch(ACTION.getHorrorMovies());
    dispatch(ACTION.getRomanceMovies());
    dispatch(ACTION.getDocumentaries());
  }, [dispatch]);
  return (
    <div className="">
      <MoviesRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
        idSection="netflix"
      />
      <MoviesRow
        movies={TrendingMovies}
        title="Trending Movies"
        idSection="trending"
      />
      <MoviesRow
        movies={TopRatedMovies}
        title="Top Rated Movies"
        idSection="topRated"
      />
      <MoviesRow
        movies={ActionMovies}
        title="Action Movies"
        idSection="actionMovies"
      />
      <MoviesRow
        movies={ComedyMovies}
        title="Comedy Movies"
        idSection="comedyMovies"
      />
      <MoviesRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horrorMovies"
      />
      <MoviesRow
        movies={RomanceMovies}
        title="Romance Movies"
        idSection="romanceMovies"
      />
      <MoviesRow
        movies={Documentaries}
        title="Documentaries Movies"
        idSection="documentariesMovies"
      />
      <GoToTop
        onClick={() => ScrollToTop()}
        style={{ visibility: `${scrollY > 500 ? "visible" : "hidden"}` }}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </div>
  );
};

export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 11;
  right: 70px;
  bottom: 50px;

  cursor: pointer;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
