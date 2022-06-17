import React, { useState } from "react";
import LogoSVG from "./svg/LogoSVG";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="site-hd">
      <div
        className={
          isOpen
            ? "masthead u-constrainer show_down  "
            : "masthead u-constrainer"
        }
      >
        <LogoSVG color={isOpen ? "#0b6e75" : "#ffffff"} />
        <nav className={isOpen ? "hList responsive" : "hList"}>
          <a className="navLink" href="#">
            Home
          </a>
          <a className="navLink" href="#">
            Current
          </a>
          <a className="navLink" href="#">
            Voting
          </a>
          <a className="navLink" href="#">
            Sign Up
          </a>
        </nav>
        <a className="hamburger" onClick={handleClickMenu}>
          {isOpen ? (
            <FaWindowClose fill={isOpen ? "#919191" : "#ffffff"} />
          ) : (
            <FaBars />
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
