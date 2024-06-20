import React from 'react'
import '../styles/Checkout.css'
import ad from '../image/ad.png'
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img src={ad} alt="checkout ad image" className="checkout_ad" />
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            <CheckoutProduct/>
        </div>
        <div className="checkout_right">

        </div>
    </div>
  )
}

export default Checkout