import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <header>
            
            <div className='logo'>
                <Link className='logo__link' to={'/'} >
                    <img className='logo__image' src= "https://firebasestorage.googleapis.com/v0/b/ecommerce-veterinaria.appspot.com/o/iconos%2Flogo-Dpelos.svg?alt=media&token=fb1e4880-5c25-472f-a637-788ffc9f8284" alt='logo'/>
                </Link>
            </div>
            <ul className='menu'>
                <li className='menu__item'>
                    <Link className='menu__link' to={'/'}>
                        Inicio
                    </Link>
                </li>
                <li className='menu__item category'>Productos
                    <ul className='category__list'>
                        <li className='menu__item'>
                            <Link className='menu__link' to={"/category/alimentoPerro"} >
                                Alimento para perros
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link className='menu__link' to={"/category/accesorios"}>
                                Accesorios
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link className='menu__link' to={"/category/alimentoGato"}>
                                Alimento para gatos
                            </Link>
                        </li>
                        <li className='menu__item'>
                            <Link className='menu__link' to={"/category/juguete"}>
                                Juguetes
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='menu__item'>
                    <Link className='menu__link' to={"/Cart"}>
                        <CartWidget/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default NavBar;