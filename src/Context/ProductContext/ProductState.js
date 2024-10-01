import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);
  return (
    <ProductContext.Provider
      value={{ products, setProducts, currentImage, setCurrentImage }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
