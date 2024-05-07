import React from "react";

import { SHeader } from "./Header.styled";

import Logo from "src/components/logo/Logo";
import DateClock from "src/components/dateClock/DateClock";

const Header = () => {
  return (
    <SHeader>
      <div className="header-left-container">
        <Logo />
      </div>

      <div className="header-right-container">
        <DateClock />
      </div>
    </SHeader>
  );
};

export default Header;
