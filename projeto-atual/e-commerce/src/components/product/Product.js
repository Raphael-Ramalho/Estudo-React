import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p> &#11088;</p>
        </div>
      </div>
        <img src={image} alt="kindle img" />
        <button>Add to Basket</button>
    </div>
  );
}

export default Product;
