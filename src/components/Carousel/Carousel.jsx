// Importation du hook useState depuis React pour gérer l'état local
import { useState } from 'react';
// Importation du fichier CSS pour les styles du composant
import './Carousel.scss'

// Déclaration et exportation du composant fonctionnel Carousel
export default function Carousel(props) {
    // Déclaration de l'état local currentIndex avec une valeur initiale de 0
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour gérer le clic sur le bouton précédent
    const handlePrevClick = () => {
        // Mise à jour de currentIndex pour afficher l'image précédente
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1));
    };

    // Fonction pour gérer le clic sur le bouton suivant
    const handleNextClick = () => {
        // Mise à jour de currentIndex pour afficher l'image suivante
        setCurrentIndex((prevIndex) => (prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        // Élément div avec la classe CSS 'carousel'
        <div className='carousel'>
            {/* Afficher le bouton précédent si props.pictures existe et contient plus d'une image */}
            {props.pictures && props.pictures.length > 1 && (
                <i className="fa-solid fa-chevron-left prev__picture" onClick={handlePrevClick}></i>
            )}
            {/* Afficher l'image actuelle et le compteur si props.pictures existe */}
            {props.pictures && (
                <>
                    {/* Élément img avec la classe CSS 'carousel__picture', la source de l'image actuelle et le texte alternatif */}
                    <img className="carousel__picture" src={props.pictures[currentIndex]} alt={props.title} />
                    <div className="carousel__counter">
                        {/* Afficher le compteur si props.pictures contient plus d'une image */}
                        {props.pictures.length > 1 && (
                            <div className="carousel__counter">
                                {currentIndex + 1}/{props.pictures.length}
                            </div>
                        )}
                    </div>
                </>
            )}
            {/* Afficher le bouton suivant si props.pictures existe et contient plus d'une image */}
            {props.pictures && props.pictures.length > 1 && (
                <i className="fa-solid fa-chevron-right next__picture" onClick={handleNextClick}></i>
            )}
        </div>
    )
}