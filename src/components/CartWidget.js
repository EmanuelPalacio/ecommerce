import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/cartContext';


const CartWidget = (props) => {
    const [quantityOfProducts , setQuantityOfProducts] = useState(false)
    const {productsInCart, cart} = useContext(CartContext);
    useEffect(() => {
        setQuantityOfProducts(productsInCart != 0)
    },[productsInCart != 0]);
        return (
            <div>
                <FontAwesomeIcon icon={faCartShopping} size='3x'
                color={quantityOfProducts != 0 ? '#9eba18' : '#9A9483'}/>
                <span>{productsInCart !== 0 && cart.map(e => e.quantity).reduce((a, b) => a + b)}</span>
            </div>
        )
    }
export default CartWidget;