import { createContext, useState } from "react";

export const CartContext = createContext();

export const ProductProvider = ({children }) => {


  const addProduct = (product, counter) => {
    console.log({ product: product, counter: counter });
  };

  return (
    <CartContext.Provider value={{addProduct}}>
      {children}
    </CartContext.Provider>
  );
};
