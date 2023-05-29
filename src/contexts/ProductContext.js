import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, setProductState] = useState(data);

  const contextState = {
    products: productState,
    setProducts: setProductState,
  };

  return <ProductContext.Provider value={contextState}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
