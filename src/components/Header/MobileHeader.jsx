import React, { useState } from "react";
import close from "../../assets/shared/mobile/icon-close.svg";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import gradient from "../../assets/suggestions/mobile/background-header.png";
import MobileMenu from "../MobileMenu/MobileMenu";

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header
      className="bg-no-repeat bg-cover h-[7.2rem] w-full pt-4 pl-6 pb-[1.5rem] pr-[2.587rem] flex justify-between items-center"
      style={{
        backgroundImage: `url(${gradient})`,
      }}
    >
      <div className="font-main">
        <h2 className="text-white text-[1.5rem] font-bold tracking-[-0.2px] leading-[22px]">
          Frontend Mentor
        </h2>
        <p className="text-white opacity-75 text-s-body">Feedback Board</p>
      </div>
      <div onClick={toggleMenu}>
        <img src={showMenu ? close : hamburger} alt="Menu Icon" />
      </div>
      {showMenu && <MobileMenu />}
    </header>
  );
}

export default MobileHeader;
