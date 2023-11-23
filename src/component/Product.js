import React from 'react'

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product_info">
                <p className="title">Brown Big Teddy for Adult and childern with a bow around it's neck</p>
                <p className="product_price">
                    <small></small>
                    <strong>$400</strong> 
                </p>
                <div className="product_rating">⭐⭐⭐⭐⭐</div>
            </div>
            <img className="product_img" src="https://i.pinimg.com/originals/37/15/50/371550e17d6b8d9c8f8ea35826c0c850.jpg" alt="teddy bear product" />
            <button className="add_to_basket_btn">Add to Basket</button>
        </div>
    </div>
  )
}

export default Product