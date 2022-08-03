import logo from '../images/Logo.svg';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"
import './styles/NavBar.css';

const NavBar = () => {
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
                <li className='menu__item'>
                    <CartWidget/>
                </li>
            </ul>
        </header>
    )
}
export default NavBar;