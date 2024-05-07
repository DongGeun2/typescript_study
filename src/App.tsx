import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Booking from "./pages/booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
