import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.scss'
 
function Header() {
    return (
        <header>
            <img src= {logo} alt='logo Kasa' className='logo'/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header