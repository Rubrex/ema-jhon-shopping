import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const products = useLoaderData();
  // States
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // useEffect
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // Get data from local storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    // Looping through id from products and updating quantity from localStorage  to cart object
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // event Handlers
  const addToCardHandler = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCardHandler={addToCardHandler}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart}>
          <div className="btn-group">
            {/* <button className="clear-btn" onClick={clearCart}>
              Clear Cart
              <FontAwesomeIcon
                icon={faTrash}
                shake
                style={{ color: "white", marginLeft: "5px" }}
              />
            </button> */}
            <Link to="/orders" className="review-btn">
              Review Order
              <FontAwesomeIcon
                icon={faArrowRight}
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

export default Shop;
