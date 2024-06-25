import React, { useEffect } from 'react'
import '../styles/Checkout.css'
import ad from '../image/ad.webp'
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import { useStateValue } from '../StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  // useEffect(() => {
  //   // Temporarily add items to basket for testing
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: "1",
  //       title: "Test Product",
  //       image: "https://via.placeholder.com/150",
  //       price: 9.99,
  //       rating: 5,
  //     }
  //   });
  // }, [dispatch]);

  console.log('Basket Contents:', basket);

  return (
    <div className="checkout">
        <div className="checkout_left">
            <img src={ad} alt="checkout ad" className="checkout_ad" />
            <h2 className="checkout_title">Your Shopping Basket</h2>
        {basket?.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          basket.map((item) => (
            <CheckoutProduct
              key={item.id}  // Add key prop
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              
            />  
          ))
        )}
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout