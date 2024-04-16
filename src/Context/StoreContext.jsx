import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const [cartItems,setCardItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCardItems((prev) => ({...prev,[itemId] :1 } ));
        }else{

            setCardItems((prev) => ({...prev,[itemId] : prev[itemId] +1}))
        }

    }


    const removeFromCart =(itemId) =>{
        setCardItems((prev) => ({...prev ,[itemId] : prev[itemId] -1}));
    }

    const getTotal = () =>{
        let totalAmount = 0;
        for(let item in cartItems ){
            if(cartItems[item] >0){
                 let itemInfo = food_list.find((product) => product.id==item )
                 totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCardItems,
        addToCart,
        removeFromCart,
        getTotal
    }
    

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;