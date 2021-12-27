import React from "react";
import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  let total = qty * price;

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>{price}</div>
      <div>
        <button
          onClick={() => {
            updateQty(id, qty - 1);
          }}
          disabled={qty < 1}
        >
          -
        </button>
        {qty}
        <button
          onClick={() => {
            updateQty(id, qty + 1);
          }}
        >
          +
        </button>
      </div>
      <div>Total: ${total.toFixed(2)}</div>
    </div>
  );
}

export default CartItem;
