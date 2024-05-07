import React from "react";

import Layout from "src/layout/Layout";
import { SMain } from "./Main.styled";

const Main = () => {
  return (
    <Layout>
      <SMain>
        <button className="booking-button">예약하기</button>
      </SMain>
    </Layout>
  );
};

export default Main;
