import React from 'react'
import "../styles/Product.css"

function Product() {

  const products = [
    {
        id:1,
        title:"Cinch Bottom Sweatpants for Women with Pockets",
        price:11.35,
        rating:4,
        image:"https://m.media-amazon.com/images/I/712kQyb3ECL._AC_SY741_.jpg",
    },
    {
        id:2,
        title:"All Good People Here: A Novel Paperback",
        price:22.00,
        rating:3,
        image:"https://m.media-amazon.com/images/I/8156RC7K6wL._SY342_.jpg",
    },
    {
        id:3,
        title:"Boys Girls Tennis Running Shoes Kids Breathable Athletic Sports Gym Sneakers for Little/Big Kid",
        price:23.99,
        rating:4,
        image:"https://m.media-amazon.com/images/I/71Tashkn2-L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id:4,
        title:"Women's Comfortable Fashion Elastic Ankle Straps Flats Shoes",
        price:53.07,
        rating:2,
        image:"https://m.media-amazon.com/images/I/618r1AtYomL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id:5,
        title:"Hunting Boots for Men, Waterproof Rubber Boots with Steel Shank, 5mm Neoprene Camo Insulated Durable",
        price:113.88,
        rating:5,
        image:"https://m.media-amazon.com/images/I/71L+XZUc-UL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id:6,
        title:"ProCase for iPad 9th Generation 2021",
        price:99.00,
        rating:5,
        image: "https://m.media-amazon.com/images/I/51HbD2W7FtL._AC_SY355_.jpg",
    },
    {
        id:7,
        title:"Women's Crewneck Long Sleeve Tie Waist A-Line Swing Bodycon Short Dress Casual Solid Ribbed Knit Sweater",
        price:45.35,
        rating:3,
        image:"https://m.media-amazon.com/images/I/71RUrreBCQL._MCnd_AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id:8,
        title:"Rooscier Women's Wrap V Neck Swing Ruffle Swiss Dots Long Sleeve Mini Dress",
        price:40.00,
        rating:5,
        image:"https://m.media-amazon.com/images/I/61QCRGS+zTL._MCnd_AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id:9,
        title:"Women's Deep V Neck Short Sleeve Long Dresses Pleated High Waist Slit Club Party Evening Maxi Dress",
        price:35.12,
        rating:1,
        image:"https://m.media-amazon.com/images/I/61vp81pXzSL._MCnd_AC_UL480_FMwebp_QL65_.jpg",
    },
    {
        id:10,
        title:"2 Pack Women Casual Long Sleeve Dresses Loose Fit Swing Pleated Dress with Pockets Knee Length",
        price:112.35,
        rating:5,
        image:"https://m.media-amazon.com/images/I/81ZaDL0bKnL._MCnd_AC_UL480_FMwebp_QL65_.jpg",
    },
];

  return (
    <>
      <div className="products">
        {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="product_info">
                  <p className="title">{product.title}</p>
                  <p className="product_price">
                      <small>$</small>
                      <strong>{product.price}</strong> 
                  </p>
                  <div className="product_rating">
                    {Array(product.rating)
                    .fill()
                    .map((_, i) => (
                      <p key={i}>⭐</p>
                    ))}
                  </div>
              </div>
              <img className="product_img" src={product.image} alt="teddy bear product" />
              <button className="add_to_basket_btn">Add to Basket</button>
            </div>
          
        ))}
          
      </div>
    </>
  )
}

export default Product