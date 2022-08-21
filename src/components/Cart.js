import { useContext} from "react";
import { CartContext } from "./context/cartContext";
import Button from "./Button"

export default function Cart () {
    const { cart, removeItem, clearCart } = useContext(CartContext)
    const priceTotal = cart.map((e)=>{
        return e.quantity*e.price
    }).reduce((a,b) => a+b,0);
    
    console.log(priceTotal)
    return(
        <table className="cartContainer__products">
            <thead>
                <tr>
                    <td colSpan={2}>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio x Cantidad</td>
                </tr>
            </thead>
            <tbody className="cartContainer__list">
                    {cart.map((item) => 
                <tr className="cartContainer__item" key={item.id} >
                    <th>{item.name}</th>
                    <th><img src={item.img} alt={item.name}/></th>
                    <th>{item.quantity}</th>
                    <th>${item.price}</th>
                    <th><Button content="X" className="btn" event={() => removeItem(item) }/></th>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={3}><Button content="eliminar carrito" className="btn" event={() => clearCart()}/></th>
                    <th>Total ${priceTotal !== 0 && priceTotal}</th>
                </tr>
            </tfoot>
        </table>
    )
};