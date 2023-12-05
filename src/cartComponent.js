import React, { memo } from "react";

export const CartComponent = memo(({ cart, addToCart }) => {
  console.log("CartComponent component firing - ");
  return (
    <div>
      <h2>Cart Component</h2>
      <h3>Cart: {cart}</h3>
      <button onClick={() => addToCart()}>Add to cart</button>
    </div>
  );
});
