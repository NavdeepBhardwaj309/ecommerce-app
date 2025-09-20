
import { createContext,useContext,useState } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);

    function addToCart(product){
        console.log("add product")
       setCart([...cart,product]);
    }
   
    function removeFromCart(id){
        setCart(cart.filter(item=>item.id!==id));

    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
         {children}
        </CartContext.Provider>
    );
}

export const useCart=()=>{
    return useContext(CartContext)
}