import React from 'react'
import '../styles/Checkout.css'
import ad from '../image/ad.webp'
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import {useStateValue} from '../StateProvider/StateProvider';

function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img src={ad} alt="checkout ad" className="checkout_ad" />
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            {basket.map(item=> (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout