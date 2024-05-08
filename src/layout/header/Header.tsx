import React from "react";

import { SHeader } from "./Header.styled";

import Logo from "src/components/logo/Logo";
import DateClock from "src/components/dateClock/DateClock";
import OperatingHours from "src/components/operatingHours/OperatingHours";

const Header = () => {
  return (
    <SHeader>
      <div className="header-left-container">
        <Logo />
      </div>

      <div className="header-right-container">
        <DateClock />

        <OperatingHours />
      </div>
    </SHeader>
  );
};

export default Header;
