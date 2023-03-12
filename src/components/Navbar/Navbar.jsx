import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import NetflixLogo from "../../assets/images/logo.png";
import useScrollY from "../hooks/useScrollY";

const Navbar = (props) => {
  const [scrollY] = useScrollY();
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    // if (keywords.length > 0) {
    //   navigate(`/search?keywords=${keywords.trim()}`);
    // } else navigate("/");
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  };

  const handleGoHome = () => {
    navigate("/");
    setKeywords("");
  };

  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={handleGoHome}>
          <img src={NetflixLogo} alt="" />
        </div>
        <div className="navSearch">
          <BiSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title, genres, people"
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 74px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 999;

  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    padding-left: 10px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .logo {
    width: 120px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .navSearch {
    color: var(--color-white);
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;

    &:hover .iconSearch {
      color: var(--color-white);
    }

    .iconSearch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transform: translateX(24px) translateY(10px);
      color: #bbb;
    }

    input {
      font-size: 14px;
      border: 1px solid #fff;
      color: var(--color-white);
      outline: none;
      width: 0;
      padding: 10px;
      cursor: pointer;
      opacity: 0;
      background: var(--color-background);
      transition: width 0.5s;

      &:focus {
        padding-left: 25px;
        width: 400px;
        cursor: text;
        opacity: 1;
        border-radius: 4px;
      }
    }
  }
`;
