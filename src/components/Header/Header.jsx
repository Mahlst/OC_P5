// Importation des hooks useLocation et Link depuis react-router-dom pour la navigation
import { Link, useLocation } from "react-router-dom"
// Importation du fichier CSS pour les styles du composant
import './Header.scss'
// Importation du logo depuis le chemin relatif
import logo from '../../assets/images/logo.svg'

// Déclaration et exportation du composant fonctionnel Header
export default function Header() {
    // Utilisation du hook useLocation pour obtenir le chemin actuel
    const location = useLocation();

    return (
        // Élément header avec la classe CSS 'header'
        <header className="header">
            <h1>
                {/* Élément img avec la classe CSS 'logo', la source de l'image du logo et le texte alternatif */}
                <img className="logo" src={logo} alt="Logo Kasa"/>
            </h1>
            {/* Élément nav pour la navigation */}
            <nav className="nav">
                {/* Lien de navigation vers la page d'accueil avec condition pour ajouter la classe 'active' */}
                <Link className={`nav__link ${location.pathname === '/' ? 'active' : ''}`} to="/">Accueil</Link>
                {/* Lien de navigation vers la page 'A Propos' avec condition pour ajouter la classe 'active' */}
                <Link className={`nav__link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">A Propos</Link>
            </nav>
        </header>
    )
}
