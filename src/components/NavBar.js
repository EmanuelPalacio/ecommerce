import logo from '../images/Logo.svg';
import './NavBar.css';
const NavBar = () => {
    return (
        <header>
            <div className='logo'>
                <img className='logo__image' src= {logo}/>
                <span>D´pelos</span>
            </div>
            <ul className='menu'>
                <li className='menu__item'>
                    <a className='menu__link'>
                        Inicio
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link'>
                        Productos
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link'>
                        Contacto
                    </a>
                </li>
            </ul>
        </header>
    )
}
export default NavBar;