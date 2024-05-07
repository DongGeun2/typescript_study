import React from "react";

import {
  ThemeProvider as Provider,
  createGlobalStyle,
} from "styled-components";

import { normalize } from "styled-normalize";
import { MAX_WIDTH } from "./VariablesStyles";

// Theme Styled
const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
      font-size: 62.5%;
      background-color: #f9f9f9;
    }

    body {
      position: relative;
      
      background-color: #fff;
      margin: auto;

      width: ${MAX_WIDTH};
      min-height: 100%;

    }
  `;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = {
    mainColor_500: "rgb(29, 153, 255)",
    mainColor_400: "rgb(0, 45, 135)",
  };

  return (
    <Provider theme={theme}>
      <GlobalStyle />

      {children}
    </Provider>
  );
};

export default ThemeProvider;
