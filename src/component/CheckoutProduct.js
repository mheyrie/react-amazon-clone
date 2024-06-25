import React from "react";
import "../styles/CheckoutProduct.css";

function CheckoutProduct({ id, image, rating, price, title }) {
  return (
    <div className="checkout_products" key={id}>
      <img
        src={image}
        alt={title}
        className="checkout_product_img"
      />
      <div className="checkout_product_info">
        <p className="checkout_product_title">
          {title}
        </p>
        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button className="checkout_product_btn">
            Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
