import { Link } from "react-router-dom"
import './Header.scss'
import logo from '../../assets/images/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <h1>
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo Kasa"/>
                </Link>
            </h1>
            <nav className="nav">
                <Link className="nav__link" to="/">Accueil</Link>
                <Link className="nav__link" to="/about">A Propos</Link>
            </nav>
        </header>
    )
}