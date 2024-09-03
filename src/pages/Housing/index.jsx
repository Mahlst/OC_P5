// Importation des hooks useParams et useNavigate depuis react-router-dom pour la gestion des paramètres de route et de la navigation
import { useParams, useNavigate } from 'react-router-dom';
// Importation des hooks useEffect et useState depuis React pour gérer l'état local et les effets de bord
import { useEffect, useState } from 'react';
// Importation des composants nécessaires
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Features from '../../components/Features/Features';

// Déclaration et exportation du composant fonctionnel Housing
export default function Housing() {
    // Récupération de l'ID depuis les paramètres de la route
    const { id } = useParams();
    // Déclaration de l'état local 'logement' avec une valeur initiale de null
    const [logement, setLogement] = useState(null);
    // Utilisation du hook useNavigate pour la navigation
    const navigate = useNavigate();

    // Utilisation du hook useEffect pour effectuer une requête fetch lors du montage du composant
    useEffect(() => {
        fetch(`http://localhost:3000/logements.json`)
            .then(response => response.json())
            .then(data => {
                // Recherche du logement correspondant à l'ID
                const foundLogement = data.find(logement => logement.id === id);
                if (!foundLogement) {
                    // Redirection vers la page d'erreur si l'ID est incorrect
                    navigate('/error');
                } else {
                    // Mise à jour de l'état 'logement' avec les données trouvées
                    setLogement(foundLogement);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Redirection en cas d'erreur de récupération des données
                navigate('/error');
            });
    }, [id, navigate]);

    return (
        <>
            {/* Inclusion du composant Header */}
            <Header />
            <main>
                <section>
                    {/* Affichage du composant Carousel si les données du logement sont disponibles */}
                    {logement && <Carousel 
                        pictures={logement.pictures} 
                        title={logement.title} 
                    />}

                    {/* Affichage du composant Features si les données du logement sont disponibles */}
                    {logement && <Features 
                        title={logement.title} 
                        location={logement.location} 
                        tag={logement.tags} 
                        host={logement.host.name} 
                        picture={logement.host.picture}
                        rating={logement.rating}
                        description={logement.description}
                        equipments={logement.equipments}
                    />}
                </section>
            </main>
            {/* Inclusion du composant Footer */}
            <Footer />
        </>
    )
}