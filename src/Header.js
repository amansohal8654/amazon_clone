import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from './StateProvider';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { auth } from './Firebase';
function Header() {
    const [{basket, user}] =useStateValue();
    const handelAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <nav className ="header">
           <Link to="/">
                <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="logo"
                />
           </Link>
            <div className="serch_box">
                <input className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div className="header_option" onClick = {handelAuth}> 
                        <span className="headre_option_Lineone">{user ? "Hello " + user.email : "Hello Gest"}</span>
                        <span className="headre_option_LineTwo">{user ? "Sign out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="headre_option_Lineone">Returns</span>
                        <span className="headre_option_LineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="headre_option_Lineone">Your</span>
                        <span className="headre_option_LineTwo">Prime</span>
                    </div>
                </Link>
                
            </div>
           <Link to="/checkout" className="header_link">
               <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
    <span className="headre_option_LineTwo header_basketCount">{basket?.length}</span>
               </div>
           </Link>   
        </nav> 
    )
}

export default Header
