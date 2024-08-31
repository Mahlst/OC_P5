import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Features from '../../components/Features/Features';

export default function Housing() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/logements.json`)
            .then(response => response.json())
            .then(data => {
                const foundLogement = data.find(logement => logement.id === id);
                if (!foundLogement) {
                    navigate('/error'); // Redirection vers la page d'erreur si l'ID est incorrect
                } else {
                    setLogement(foundLogement);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                navigate('/error'); // Redirection en cas d'erreur de récupération des données
            });
    }, [id, navigate]);

    return (
        <>
            <Header />
            <main>
                <section>
                    {logement && <Carousel 
                        pictures={logement.pictures} 
                        title={logement.title} 
                    />}

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
            <Footer />
        </>
    )
}
