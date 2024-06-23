import React from "react";
import productsData from "../data/products.json";
import "../styles/Product.css";
import {useStateValue} from '../StateProvider/StateProvider';

function ProductCard() {

  // Add to basket onClick function 
  const [state, dispatch] = useStateValue()

  const addToBasket = (id, image, rating, price, title) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title: title,
      },
    });
  }



  return (
    <div className="products">
      {productsData.products.map(({ id, title, price, rating, image }) => (
        <div className="product" key={id}>
          <div className="product_info">
            <p className="title">{title}</p>
            <p className="product_price">
              <small>$</small>
              <strong>{Number(price).toFixed(2)}</strong>
            </p>
            <div className="product_rating">
              {Array(Number(rating))
                .fill()
                .map((_, i) => (
                  <p key={i}>⭐</p>
                ))}
            </div>
          </div>
          <div className="product_img_container">
            <img className="product_img" src={image} alt={`${title} product`} />
          </div>

          <div className="add_to_basket_btn_container">
            <button onClick={addToBasket} className="add_to_basket_btn">Add to Basket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
