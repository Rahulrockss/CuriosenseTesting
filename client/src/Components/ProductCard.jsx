import React from "react";
import "../Components/ProductCard.css";
const ProductCard = ({ name, price, imageUrl, bio, buttonSec }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}</p>
        <p className="product-price bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProductCard;
