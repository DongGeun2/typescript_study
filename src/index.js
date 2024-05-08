import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./styles/ThemeProvider";
import ProductContextPrivider from "./store/UserContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      cacheTime: 10000,

      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 2,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ProductContextPrivider>
        <App />
      </ProductContextPrivider>
    </ThemeProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
