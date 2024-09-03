// Importation du fichier CSS pour les styles du composant
import './Banner.scss'

// Déclaration et exportation du composant fonctionnel Banner
export default function Banner(props) {
    return (
        // Élément div avec la classe CSS 'banner' et le rôle ARIA 'banner'
        <div className='banner' role='banner'>
            {/* Si la prop 'title' est définie, afficher un élément h2 avec la classe CSS 'banner__title' */}
            { props.title && <h2 className='banner__title'>{ props.title }</h2> }
            {/* Élément img avec la classe CSS 'banner__img', la source de l'image et le texte alternatif */}
            <img className='banner__img' src={props.image} alt={ props.alt } />
        </div>
    )
}