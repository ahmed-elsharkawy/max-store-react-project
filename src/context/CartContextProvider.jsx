import React, { useState } from "react";

import { CartContex } from "./CartContext";

export default function CartContextProvider(props) {
  let [cartLength, setCartLength] = useState(
    JSON.parse(localStorage.getItem("cartList"))?.length
  );
  let addItem = () => {
    setCartLength(JSON.parse(localStorage.getItem("cartList"))?.length);
  };
  return (
    <CartContex.Provider value={{ cartLength, addItem }}>
      {props.children}
    </CartContex.Provider>
  );
}
