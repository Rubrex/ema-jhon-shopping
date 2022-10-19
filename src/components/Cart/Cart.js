import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart, children } = props;
  // console.log(cart);
  // Tax and Total Calculations
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>
      {children}
    </div>
  );
};

export default Cart;
