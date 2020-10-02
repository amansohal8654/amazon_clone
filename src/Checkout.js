import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket, user}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img  
                className= "checkout_ad" 
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" 
                alt="">
                </img>
                {basket?.length === 0 ? (
                    <div>
                     <h3>{user ? "Hello, " + user.email : ""}</h3>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        you have no item in your basket. To buy one or more items, click
                        "Add to basket" to the item.
                    </p>
                    </div>
                ):
                (
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout_titel">Your Shopping Basket</h2>
                        {basket.map(item =>(
                            <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 &&(
                <div className= "checkout_right">
                    <Subtotal />
                </div>

            )}
        </div>
    )
}

export default Checkout
