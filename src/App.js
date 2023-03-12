import { useSelector } from "react-redux";
import "./App.css";
import Contents from "./components/Contents/Contents";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <div className="">
      <Navbar />
      <Intro />
      <Contents />
      <Menu />
      <MoviesDetail
        movie={MovieDetail}
        showModal={MovieDetail ? true : false}
      />
    </div>
  );
}

export default App;
