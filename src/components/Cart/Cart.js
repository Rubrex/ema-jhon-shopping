import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import React from "react";
import "./Cart.css";
import { deleteShoppingCart } from "../../utilities/fakedb";
const Cart = (props) => {
  const { cart, setCart } = props;
  // Tax and Total Calculations
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = (total + shipping + tax).toFixed(2);

  // Clear Shopping Cart Handler
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
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
      <div className="btn-group">
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
          <FontAwesomeIcon
            icon={faTrash}
            shake
            style={{ color: "white", marginLeft: "5px" }}
          />
        </button>
        <button className="review-btn">
          Review Order
          <FontAwesomeIcon
            icon={faArrowRight}
            beatFade
            style={{ color: "white", marginLeft: "5px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;
