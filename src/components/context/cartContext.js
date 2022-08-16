import { createContext , useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider ({children}) {
    const [cart , setCart] = useState([])
    
    const searchItem = (item) => cart.findIndex((e) => e.id === item.id);
    const isInCart = (item) => cart.some((e) => e.id === item.id);
    const addToCart = (item, quantity) => {
        const addItem = {...item, quantity: quantity};
        // Logica de diplicados
        searchItem(item);
        return isInCart(item) ? (cart.splice(searchItem(item), 1 , addItem),  setCart([...cart])) : 
        setCart([...cart,addItem]);
    }
    const removeItem = (item) => {
        cart.splice(searchItem(item), 1 );
        return setCart([...cart]);
    }
    const clearCart = () => setCart([]);

    useEffect(()=> console.log(cart),[cart.length])

    return(
        <CartContext.Provider value={{addToCart, clearCart, cart , removeItem, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}
