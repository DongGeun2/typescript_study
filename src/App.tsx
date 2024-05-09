import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./pages/main/Main"));
const Booking = lazy(() => import("./pages/booking/Booking"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader-container"></div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
