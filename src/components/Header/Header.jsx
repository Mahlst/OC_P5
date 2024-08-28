import { Link } from "react-router-dom"
import './Header.scss'
import logo from '../../assets/images/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo Kaza" />
            <nav className="nav">
                <Link className="nav__link nav__link--active" to="/">Accueil</Link>
                <Link className="nav__link" to="/about">A Propos</Link>
            </nav>
        </header>
    )
}