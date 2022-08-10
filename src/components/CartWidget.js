import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from './context/cartContext';


const CartWidget = (props) => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} size='3x' color='black'/>
            {cart.length !== 0 && <span>{cart.length}</span>}
        </div>
    )
}
export default CartWidget;