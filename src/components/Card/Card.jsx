// Importation du composant Link depuis react-router-dom pour la navigation
import { Link } from "react-router-dom";
// Importation du fichier CSS pour les styles du composant
import './Card.scss'

// Déclaration et exportation du composant fonctionnel Card
export default function Card(props) {
    return (
        // Élément article avec la classe CSS 'home__card'
        <article className="home__card">
            {/* Composant Link pour créer un lien vers la page de logement avec l'ID spécifié */}
            <Link to={`/housing/${props.id}`} className="home__card__link">
                {/* Élément img avec la classe CSS 'home__card__img', la source de l'image et le texte alternatif */}
                <img className="home__card__img" src={props.cover} alt={props.title} />
                {/* Élément h3 avec la classe CSS 'home__card__title' pour afficher le titre */}
                <h3 className="home__card__title">{props.title}</h3>
            </Link>
        </article>
    )
}