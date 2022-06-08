import React, { useState } from "react";
import LogoSVG from "./svg/LogoSVG";
import { FaBars, FaWindowClose } from "react-icons/fa";

// const humbeguer = '&#9776;'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const humbeguer = "&#9776;";

  const handleClickMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen ? "Abierto" : "cerrado");
  };
  return (
    <header className="site-hd">
      <div className="masthead u-constrainer">
        {/* <a className="logo">
                        <svg viewBox="0 0 900 300">
                            <use xlink:href="#logo"></use>
                        </svg>
                    </a> */}
        <LogoSVG />
        {/* <nav className="hList"> */}
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
          href="javascript:void(0);"
          className="hamburger"
          onClick={handleClickMenu}
        >
          {/* <span className={isOpen? "closeModale rotate": "closeModale"}>{isOpen ? "X" : <FaHamburger />}</span> */}
          {isOpen ? <span className={isOpen? "closeModale rotate": "closeModale"}><FaWindowClose /></span>: <FaBars />} 
        </a>
      </div>
    </header>
  );
};

export default Header;
