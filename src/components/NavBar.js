import logo from '../images/Logo.svg';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './context/cartContext';
import './styles/NavBar.css';

const NavBar = () => {
    const {cart} = useContext(CartContext)
    return (
        <header>
            
            <div className='logo'>
                <Link className='logo__link' to={'/'} >
                    <img className='logo__image' src= {logo}/>
                    <span>D´pelos</span>
                </Link>
            </div>
            <ul className='menu'>
                <li className='menu__item'>
                    <Link className='menu__link' to={'/'}>
                        Inicio
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link className='menu__link' to={"/category/alimentoPerro"} >
                        alimento de perros
                    </Link>
                </li>
                <li className='menu__item'>
                    <Link className='menu__link' to={"/category/accesorios"}>
                        accesorios
                    </Link>
                </li>
                {cart.length !== 0 &&
                    <li className='menu__item'>
                        <Link className='menu__link' to={"/Cart"}>
                            <CartWidget/>
                        </Link>
                    </li>
                }
            </ul>
        </header>
    )
}
export default NavBar;