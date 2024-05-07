import React from "react";

import { useQuery } from "react-query";
import MOCK from "src/__mock__/mock";

export const ProductContext = React.createContext();

const ProductContextPrivider = (props) => {
  const fetchData = async () => {
    const res = await MOCK;

    return res;
  };

  const { data: product, isLoading } = useQuery(["product"], fetchData);

  return (
    <ProductContext.Provider
      value={{
        product,
        isLoading,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextPrivider;
