import logo from '../images/Logo.svg';
import './styles/NavBar.css';

const NavBar = () => {
    return (
        <header>
            <div className='logo'>
                <img className='logo__image' src= {logo}/>
                <span>D´pelos</span>
            </div>
            <ul className='menu'>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        Inicio
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        Productos
                    </a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        Contacto
                    </a>
                </li>
            </ul>
        </header>
    )
}
export default NavBar;