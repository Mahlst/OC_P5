// Importation du fichier CSS pour les styles du composant
import './Footer.scss'
// Importation du logo depuis le chemin relatif
import logo from '../../assets/images/logo.svg'

// Déclaration et exportation du composant fonctionnel Footer
export default function Footer() {
    return (
        // Élément footer avec l'ID 'footer' et la classe CSS 'footer'
        <footer id='footer' className='footer'>
            {/* Élément img avec la classe CSS 'footer__logo', la source de l'image du logo et le texte alternatif */}
            <img className='footer__logo' src={logo} alt="Logo Kaza" />
            {/* Élément p avec la classe CSS 'footer__copyright' pour afficher le texte de copyright */}
            <p className='footer__copyright'>© 2024 Kasa. All rights reserved</p>
        </footer>
    )
}