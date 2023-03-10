import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import * as ACTION from "../store/actions";
import MoviesRow from "./MoviesRow";

const Contents = () => {
  const dispatch = useDispatch();
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
      />
      <MoviesRow movies={TrendingMovies} title="Trending Movies" />
      <MoviesRow movies={TopRatedMovies} title="Top Rated Movies" />
      <MoviesRow movies={ActionMovies} title="Action Movies" />
      <MoviesRow movies={ComedyMovies} title="Comedy Movies" />
      <MoviesRow movies={HorrorMovies} title="Horror Movies" />
      <MoviesRow movies={RomanceMovies} title="Romance Movies" />
      <MoviesRow movies={Documentaries} title="Documentaries Movies" />
    </div>
  );
};

export default Contents;
