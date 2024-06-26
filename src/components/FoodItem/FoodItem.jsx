import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ({id,name,img,price,description}) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={img} alt=''/>
                {!cartItems[id] ? (

                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                ) : (
                    <div className='food-item-counter'>
                       <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red}/>
                       <p>{cartItems[id]}</p>
                       <img onClick={() => addToCart(id)}  src={assets.add_icon_green}/>
                    </div>
                )}
                <div className="food-item-info">
                    <div className="food-item-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="Rating"/>
                    </div>
                    <p className='food-item-desc'>{description}</p>
                    <p className='price'>{price}</p>
                </div>
            </div>
        </div>
    );
}



export default FoodItem