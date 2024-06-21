import React from "react";
import "../styles/CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkout_products">
      <img
        src="https://m.media-amazon.com/images/I/712kQyb3ECL._AC_SY741_.jpg"
        alt=""
        className="checkout_product_img"
      />
      <div className="checkout_product_info">
        <p className="checkout_product_title">
          Cinch Bottom Sweatpants for Women with Pockets Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis porro eum eligendi asperiores accusamus illo, maiores repellat explicabo eius laboriosam laudantium quo illum expedita magni quos, natus temporibus! Id?
        </p>
        <p className="checkout_product_price">
          <small>$</small>
          <strong>11.35</strong>
        </p>
        <div className="checkout_product_rating">
            ⭐⭐⭐
        </div>
        <button className="checkout_product_btn">
            Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
