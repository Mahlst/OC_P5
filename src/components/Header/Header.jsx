// Importation du composant Link depuis react-router-dom pour la navigation
import { Link } from "react-router-dom"
// Importation du fichier CSS pour les styles du composant
import './Header.scss'
// Importation du logo depuis le chemin relatif
import logo from '../../assets/images/logo.svg'

// Déclaration et exportation du composant fonctionnel Header
export default function Header() {
    return (
        // Élément header avec la classe CSS 'header'
        <header className="header">
            <h1>
                {/* Composant Link pour créer un lien vers la page d'accueil */}
                <Link to="/">
                    {/* Élément img avec la classe CSS 'logo', la source de l'image du logo et le texte alternatif */}
                    <img className="logo" src={logo} alt="Logo Kasa"/>
                </Link>
            </h1>
            {/* Élément nav pour la navigation */}
            <nav className="nav">
                {/* Lien de navigation vers la page d'accueil */}
                <Link className="nav__link" to="/">Accueil</Link>
                {/* Lien de navigation vers la page 'A Propos' */}
                <Link className="nav__link" to="/about">A Propos</Link>
            </nav>
        </header>
    )
}