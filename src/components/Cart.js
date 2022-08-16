import { useContext, useEffect } from "react";
import { CartContext } from "./context/cartContext";
import Button from "./Button"

export default function Cart () {
    const { cart, removeItem, clearCart } = useContext(CartContext)
    const priceTotal = cart.map((e)=>{
        return e.quantity*e.price
    }).reduce((a,b) => a+b,0)

    console.log(priceTotal)
    return(
        <div className="cartContainer__products">
            <ul className="cartContainer__list">
                    {cart.map((item) => 
                <li className="cartContainer__item" key={item.id} >
                    <h3>
                        {item.name}
                    </h3>
                    <img src={item.img}/>
                    <span>{item.quantity}</span>
                    <span>${item.price}</span>
                    <Button content="X" className="btn" event={() => removeItem(item) }/>
                </li>
                )};
            </ul>
                <Button content="eliminar carrito" className="btn" event={() => clearCart()}/>
                <span>{priceTotal !== 0 && priceTotal}</span>
        </div>
    )
};