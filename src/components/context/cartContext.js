import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider ({children}) {
    const [cart , setCart] = useState([])
    
    const addToCart = (item, quantity) => {
        const addItem = {...item, quantity: quantity};
        // Logica de diplicados
        const isInCart = cart.some((e) => e.id === item.id);
        const replace = cart.findIndex((e) => e.id === item.id);
        return isInCart ? cart.splice(replace, 1 , addItem) : setCart([...cart,addItem]);
    }
    const removeItem = () => cart.splice(replace, 1);
    const clearCart = () => setCart([]);  

    return(
        <CartContext.Provider value={{addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
