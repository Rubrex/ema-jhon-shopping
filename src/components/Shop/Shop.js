import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
      const addedProduct = products.find((product) => product.id === id);
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
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-container container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCardHandler={addToCardHandler}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Shop;
