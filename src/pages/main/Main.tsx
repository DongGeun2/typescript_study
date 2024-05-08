import React from "react";

import { SMain } from "./Main.styled";
import useDate from "src/hook/useDate";

import Layout from "src/layout/Layout";

const Main = () => {
  const { data } = useDate(new Date());

  console.log(data);

  return (
    <Layout>
      <SMain></SMain>
    </Layout>
  );
};

export default Main;
