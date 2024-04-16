import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

    const {getTotal} = useContext(StoreContext);


  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className='title'>Delivery information</p>
            <div className="multi-fields">
                <input type='text' placeholder='first name'/>
                <input type='text' placeholder='last name'/>
            </div>

            <input type='text' placeholder='email address'/>
            <input type='text' placeholder='Street'/>
            <div className="multi-fields">
                <input type='text' placeholder='City'/>
                <input type='text' placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type='text' placeholder='Zip code'/>
                <input type='text' placeholder='Country'/>
            </div>
            <input type='text' placeholder='Phone'/>
        </div>


        <div className="place-order-right">
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
                    <button >PROCEED TO Payment</button>
                </div>
        </div>
    </form>
  )
}

export default PlaceOrder