import { useContext, useEffect } from "react";
import { CartContext } from "./context/cartContext";
import Button from "./Button"
import "./styles/Cart.css"

export default function Cart () {
    const { cart, removeItem, clearCart } = useContext(CartContext)

    return(
        <div className="cartContainer">
            <ul className="cartContainer__list">
                {cart.map((item) => 
                <li className="cartItem" key={item.id} >
                    <h3>
                        {item.title}
                    </h3>
                    <img src={item.imagen}/>
                    <span>{item.quantity}</span>
                    <Button content="X" className="btn" event={() => removeItem(item) }/>
                </li>
                )};
                <Button content="eliminar carrito" className="btn" event={() => clearCart()}/>
            </ul>
        </div>
    )
};