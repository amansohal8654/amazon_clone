import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id : id
        })
   }
   debugger
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_img"/>
            <div className = "checkoutProduct_info">
                <p className = "CheckoutProduct_title">{title}</p>
                <p className= "checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p><span role="img" aria-label="this is star">🌟</span></p>
                    ))
                    }
                </div>
                <button onClick={RemoveFromBasket}>Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
