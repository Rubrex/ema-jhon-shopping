import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div className="shop-container container">
      <div className="orders-container">
        {cart.map((product) => {
          return <ReviewItem key={product.id} product={product}></ReviewItem>;
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Orders;
