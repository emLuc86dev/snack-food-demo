import React, { useState } from "react";
import LogoSVG from "./svg/LogoSVG";
import { FaBars, FaWindowClose } from "react-icons/fa";

// const humbeguer = '&#9776;'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const humbeguer = "&#9776;";

  const handleClickMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className={isOpen ? "site-hd responsive" : "site-hd"}>
      <div className="masthead u-constrainer">
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
        <a
          // href="javascript:void(0);"
          className="hamburger"
          onClick={handleClickMenu}
        >
          {isOpen ? (
            <FaWindowClose
              fill={isOpen ? "#919191" : "#ffffff"}
              
            />
          ) : (
            <FaBars  />
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
