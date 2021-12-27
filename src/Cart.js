import React from "react";
import CartItem from "./CartItem";
function Cart({ initialItems }) {
  return (
    <div className="Cart">
      <h1>cart</h1>
      <div className="Cart-items">
        {initialItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
