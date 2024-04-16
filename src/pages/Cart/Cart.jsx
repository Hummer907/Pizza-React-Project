import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart,getTotal } = useContext(StoreContext);

    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div  key={index}>
                                 <div key={index} className='cart-items-title cart-items-item'>
                                    <img src={item.img}/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>${item.price * cartItems[item.id]}</p>
                                    <p className='cross' onClick={() =>{
                                        removeFromCart(item.id)
                                    }}>x</p>
                                </div> 
                                <hr />
                            
                            </div>
                           
                            
                        );
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotal()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery fee</p>
                            <p>${getTotal() == 0 ? "0" : "2"}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotal() == 0 ? getTotal() : getTotal()+2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/order")}>PROCEED TO CHECK OUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>if you have promocode enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
