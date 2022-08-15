import Cart from "./Cart";
import Error404 from "./Error404";
import { useContext } from "react";
import { CartContext } from "./context/cartContext";
import "./styles/CartContainer.css"

export default function CartContainer () {
    const {cart} = useContext(CartContext);       
        return(
            <main>
                {cart.length === 0 ?
                <Error404/> :
                <div className="cartContainer">
                    <Cart/>
                    <div className="cartContainer__pay">
                    </div>
                </div>
                }
            </main>
        )
    
}