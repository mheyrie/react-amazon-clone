import React from 'react'
import '../styles/Checkout.css'
import ad from '../image/ad.webp'
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img src={ad} alt="checkout ad image" className="checkout_ad" />
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            <CheckoutProduct/>
            <CheckoutProduct/>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout