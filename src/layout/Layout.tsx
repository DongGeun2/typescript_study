import React from "react";

import { ILayout } from "./Layout.props";
import { SLayout } from "./Layout.styled";

import Header from "./header/Header";

const Layout = ({ children }: ILayout) => {
  return (
    <SLayout>
      <Header />

      {children}
    </SLayout>
  );
};

export default Layout;
