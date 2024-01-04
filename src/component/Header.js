import React from 'react'
import "../styles/Header.css"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className="header_all">
        <div className="header_logo">
            <StorefrontIcon className="header_logoImage" fontSize="large"/>
            <h2 className="header_logoTitle">eShop</h2>
        </div>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>
      {/* Navigation setup */}
        <div className="header_nav">
            <div className="nav_item">
                <span className="nav_itemFirst">Hello, Welcome</span>
                <span className="nav_itemSecond">Sign-In</span>
            </div>
            <div className="nav_item">
                <span className="nav_itemFirst">Your</span>
                <span className="nav_itemSecond">Shop</span>
            </div>
            <div className="nav_itemBasket">
                <LocalGroceryStoreIcon className="itemBasket" /> 
                <span className="nav_itemSecond nav_basketCount" >0</span>
            </div>
      </div>
    </div>
  )
}

export default Header