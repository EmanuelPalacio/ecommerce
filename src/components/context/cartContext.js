import { createContext , useState,useEffect } from "react";
export const CartContext = createContext();

export default function CartProvider ({children}) {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    console.log(cartStorage)
    const [cart , setCart] = useState(cartStorage)
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
    const clearCart = () => {
        setCart([]);
        localStorage.clear()
    }
    const totalPrice =  cart.length !== 0 && cart.map((e)=> e.price*e.quantity).reduce((a,b)=> a + b,0)
    const productsInCart = cart.length

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{addToCart, clearCart, cart , removeItem, isInCart, totalPrice, productsInCart }}>
            {children}
        </CartContext.Provider>
    )
}
