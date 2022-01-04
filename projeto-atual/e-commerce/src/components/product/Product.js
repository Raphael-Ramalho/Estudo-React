import React from "react";
import "./Product.css";
import KindleIMG from '../../assets/img/kindle.jpg' 

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p> The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>        
        </p>
        <div className="product__rating">
          <p>	&#11088;</p>
        </div>
        <img src={KindleIMG} alt="kindle img"/>
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
