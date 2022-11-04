import { faShippingFast, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  // Remove Cart Button Handler
  const handleRemoveItem = (id) => {
    const remainingCart = cart.filter((product) => product._id !== id);
    console.log(cart, id);
    setCart(remainingCart);
    removeFromDb(id);
  };

  // Clear Shopping Cart Handler
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
    Swal.fire({
      title: "Cleared",
      text: "Your cart has been cleared",
      icon: "success",
      confirmButtonText: "Done",
    });
  };

  return (
    <div className="shop-container container">
      <div className="orders-container">
        {cart.map((product) => {
          return (
            <ReviewItem
              key={product._id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart}>
          <div className="btn-group">
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
              <FontAwesomeIcon
                icon={faTrash}
                shake
                style={{ color: "white", marginLeft: "5px" }}
              />
            </button>
            <Link to="/shipping" className="review-btn">
              Proceed Shipping
              <FontAwesomeIcon
                icon={faShippingFast}
                beatFade
                style={{ color: "white", marginLeft: "5px" }}
              />
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
