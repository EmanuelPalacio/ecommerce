import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from './context/cartContext';


const CartWidget = (props) => {
    const {cart} = useContext(CartContext)
        return (
            <div>
                <FontAwesomeIcon icon={faCartShopping} size='3x' color='black'/>
                <span>{cart.length !== 0 && cart.map(e => e.quantity).reduce((a, b) => a + b)}</span>
            </div>
        )
    }
export default CartWidget;