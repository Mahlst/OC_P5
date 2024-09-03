// Importation du composant Collapse depuis le chemin relatif
import Collapse from '../Collapse/Collapse';
// Importation du fichier CSS pour les styles du composant
import './Features.scss';

// Déclaration et exportation du composant fonctionnel Features
export default function Features(props) {
    // Fonction pour rendre les étoiles de notation en fonction de la note
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            // Ajout d'une étoile pleine ou vide en fonction de la note
            stars.push(
                <i key={i} className={`fa-star ${i <= rating ? 'fa-solid' : 'fa-solid emply'}`}></i>
            );
        }
        return stars;
    };

    // Fonction pour rendre la liste des équipements
    const renderEquipments = (equipments) => {
        return (
            <ul>
                {equipments.map((equipment, index) => (
                    // Chaque équipement est rendu dans un élément li
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {/* Section principale des fonctionnalités */}
            <div className='features'>
                <div className='features__info'>
                    {/* Titre des fonctionnalités */}
                    <h2 className='features__info__title'>{props.title}</h2>
                    {/* Localisation des fonctionnalités */}
                    <p className='features__info__location'>{props.location}</p>
                    <div className='features__info__tags'>
                        {/* Affichage des tags si disponibles */}
                        {props.tag && props.tag.length > 0 && props.tag.map((tag, index) => (
                            <button className='features__info__tags--btn' key={index}>{tag}</button>
                        ))}
                    </div>
                </div>

                <div className='features__host__container'>
                    <div className='features__host'>
                        {/* Affichage du nom de l'hôte */}
                        <h3 className='features__host__title'>
                            {props.host.split(' ')[0]}<br />{props.host.split(' ')[1]}
                        </h3>
                        {/* Affichage de l'image de l'hôte */}
                        <img className='features__host__picture' src={props.picture} alt={props.host}/>
                    </div>
                    <div className='features__rating'>
                        {/* Affichage de la notation */}
                        {renderRating(props.rating)}
                    </div>
                </div>
            </div>
            <div className='features__collapse'>
                <div className='features__collapse__container'>
                    {/* Composant Collapse pour la description */}
                    <Collapse title="Description" content={props.description}/>
                </div>
                <div className='features__collapse__container'>
                    {/* Composant Collapse pour les équipements */}
                    <Collapse title="Équipements" content={renderEquipments(props.equipments)}/>
                </div>
            </div>
        </>        
    );
}