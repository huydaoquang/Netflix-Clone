import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiBandageRoll,
  GiGhost,
  GiRomanToga,
  GiNinjaHeroicStance,
} from "react-icons/gi";
import styled from "styled-components";

import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <MenuPane>
      <MenuItem name="Home" Icon={FaHome} to="netflix" />
      <MenuItem name="Trending" Icon={FaHotjar} to="trending" />
      <MenuItem name="Top rated" Icon={FaStar} to="topRated" />
      <MenuItem
        name="Action Movies"
        Icon={GiNinjaHeroicStance}
        to="actionMovies"
      />
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to="comedyMovies" />
      <MenuItem name="Horror Movies" Icon={GiGhost} to="horrorMovies" />
      <MenuItem name="Romance Movies" Icon={GiRomanToga} to="romanceMovies" />
      <MenuItem
        name="Documentaries"
        Icon={GiBandageRoll}
        to="documentariesMovies"
      />
    </MenuPane>
  );
};

export default Menu;

const MenuPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background: rgba(50, 50, 50, 0.3);
  z-index: 100;
  user-select: none;

  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover {
    width: 200px;
    background: rgba(0, 0, 0, 0.5);
  }

  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 20px 4px 10px;
    cursor: pointer;

    .icon {
      font-size: 30px;
      margin-right: 8px;
    }

    span {
      font-size: 16px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.7);

      &:hover {
        color: #fff;
      }
    }
  }
`;
