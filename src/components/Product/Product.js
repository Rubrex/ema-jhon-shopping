import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { addToCardHandler, product } = props;
  const { img, name, seller, ratings, price } = product;
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-desc-container">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-manufacturer">Manufacturer: {seller}</p>
        <p className="product-ratings">Ratings: {ratings}</p>
      </div>
      <button onClick={() => addToCardHandler(product)}>
        Add to cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
