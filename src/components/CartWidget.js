import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = (props) => {
    return (
        <FontAwesomeIcon icon={faCartShopping} size='3x' color='black'/>
    )
}
export default CartWidget;