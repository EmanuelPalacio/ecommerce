import { createContext , useState } from "react";

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
    const totalPrice =  cart.length !== 0 && cart.map((e)=> e.price*e.quantity).reduce((a,b)=> a + b,0)
    const productsInCart = cart.length

    return(
        <CartContext.Provider value={{addToCart, clearCart, cart , removeItem, isInCart, totalPrice, productsInCart }}>
            {children}
        </CartContext.Provider>
    )
}
