import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, price, quantity, shipping } = product;
  console.log(product);
  return (
    <div className="review-item-container">
      <div className="review-thumbnail">
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p className="review-product-name">{name}</p>
          <div>
            Price: <small>${price}</small>
          </div>
          <div>
            Shipping: <small>${shipping}</small>
          </div>
          <div>
            Quantity: <small>{quantity}</small>
          </div>
        </div>
        <button className="delete-btn" onClick={() => handleRemoveItem(id)}>
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrashCan}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
