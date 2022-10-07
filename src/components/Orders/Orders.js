import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  // Remove Cart Button Handler
  const handleRemoveItem = (id) => {
    const remainingCart = cart.filter((product) => product.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };
  return (
    <div className="shop-container container">
      <div className="orders-container">
        {cart.map((product) => {
          return (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Orders;
