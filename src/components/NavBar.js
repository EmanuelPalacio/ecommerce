import logo from '../images/Logo.jpg'
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
            <img className='logo' src= {logo}/>
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