import React from 'react'
import "../styles/Home.css"
import Product from "./Product"

function Home() {
   
  return (
    <>
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" alt="e-commerce art"/>
            <div className="home_row">
                <Product />
            </div>
            </div>
        </div>
    </>
  )
}

export default Home