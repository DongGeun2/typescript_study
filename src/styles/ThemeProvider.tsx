import React from "react";

import {
  ThemeProvider as Provider,
  createGlobalStyle,
} from "styled-components";

import { normalize } from "styled-normalize";

// Theme Styled
const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
      font-size: 62.5%;
      background-color: #f9f9f9;
    }
  `;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = {
    mainColor_500: "#1d99ff",
    mainColor_400: "#002d87",
  };

  return (
    <Provider theme={theme}>
      <GlobalStyle />

      {children}
    </Provider>
  );
};

export default ThemeProvider;
