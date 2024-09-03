// Importation du hook useState depuis React pour gérer l'état local
import { useState } from 'react'
// Importation du fichier CSS pour les styles du composant
import './Collapse.scss'

// Déclaration et exportation du composant fonctionnel Collapse
export default function Collapse({title, content}) {
    // Déclaration de l'état local 'active' avec une valeur initiale de false
    const [active, setActive] = useState(false)

    // Fonction pour gérer le clic sur le titre et basculer l'état 'active'
    const handleToggle = e => {
        // Mise à jour de l'état 'active' pour afficher ou masquer le contenu
        setActive(!active)
    }

    return (
        // Élément div avec la classe CSS 'collapse' et une classe conditionnelle 'active' si l'état 'active' est vrai
        <div className={`collapse ${active && "active"}`}>
            {/* Élément div pour le titre avec la classe CSS 'collapse__title' et un gestionnaire d'événements pour le clic */}
            <div className='collapse__title' onClick={handleToggle}>
                {/* Affichage du titre et de l'icône */}
                {title} <i className="fa-solid fa-chevron-up collapse__icon"></i>
            </div>
            {/* Élément div pour le contenu avec la classe CSS 'collapse__content' */}
            <div className='collapse__content'>
                {content}
            </div>
        </div>
    )
}