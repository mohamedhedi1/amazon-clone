import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStateValue} from "./StateProvider";

function Header() {
    const [{basket}]= useStateValue();
    return (
        <div className="header"> 
        <Link to="/">
        <img className="header__logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt=""
             />
        </Link>
        <div className="header__search">
        <input type="text" className="header__searchInput" />
         <SearchIcon className="header__searchIcon" /> 
        </div>
        <div className="header__nav">
            <Link to="/login" className="header__link">
            <div className="header__option">
            <span className="header__option1">Hello,</span>
            <span className="header__option2">Sign In</span>
            </div>
           
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__option1">Return</span>
            <span className="header__option2">& Orders</span>
            </div>
           
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
            </div>
           
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <AddShoppingCartIcon />
                    <span className="header__option2 header__basketCount ">{basket?.length}</span>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default Header
