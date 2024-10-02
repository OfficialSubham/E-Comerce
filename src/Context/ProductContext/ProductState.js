import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState([]);
  let [cart, setCart] = useState({ id: null, quantity: null });
  const [cartItems, setCartItems] = useState([]);
  const [productIdWithQuantity, setProductIdWithQuantity] = useState([]);
  let [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const handleCart = (id) => {
    let isProduct = cartItems.find((item) => item.id === id);
    if (isProduct) {
      let updatedCart = cartItems.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems(cartItems.concat({ id, quantity: 1 }));
    }
  };
  const decreaseQuantity = (id) => {
    let updatedCart = cartItems.filter((item) => {
      if (item.id === id) {
        item.quantity -= 1;
        return item.quantity > 0;
      }
      return item.quantity > 0;
    });
    setCartItems(updatedCart);
  };

  useEffect(() => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cartItems.forEach((product) => {
      totalQuantity += product.quantity;
      let oneProduct = products.filter(pDetails => product.id === pDetails.id);
      totalPrice += ((oneProduct[0].priceCents / 100) * product.quantity)
    });
    setQuantity(totalQuantity);
    setTotalAmount(totalPrice.toFixed(2))
  }, [cartItems]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        currentImage,
        setCurrentImage,
        cart,
        setCart,
        productIdWithQuantity,
        setProductIdWithQuantity,
        handleCart,
        cartItems,
        setCartItems,
        quantity,
        decreaseQuantity,
        totalAmount,
        setTotalAmount
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
