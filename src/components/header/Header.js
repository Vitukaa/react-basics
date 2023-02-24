import { Link } from 'react-router-dom';
import MediumButton from '../naujienos/naujienos-components/Button/MediumButton';
import './Header.css';

function Header() {
    return (

        <header className="main-header">
        <div className="container">
            <div className="image-wrapper"> 
            <Link to='/codeacademy'>
                <img className="logo"
                src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                alt="CodeAcademy logo" /> 
            </Link>

                </div>
            <nav className="main-navigation">
                <ul className="main-menu">
                    <li className="menu-item"><a className="menu-link" href="#">Studentams</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Verslui</a></li>
                    <li className="menu-item">
                        <Link to='/codeacademy/programs' className="menu-link" href="#">Programos</Link>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="#">Apie mus</a></li>
                    <li className="menu-item">
                        <Link to='/codeacademy/news' className="menu-link" href="#">Naujienos</Link>
                        </li>
                    <li className="menu-item"><a className="menu-link" href="#">IT testas</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">Kontaktai</a></li>
                    <li className="menu-item"><a className="menu-link" href="#">EN</a></li>
                    <li className="menu-item">
                        <MediumButton url='tel:+37045646444' buttonText='Skambinti' />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header;