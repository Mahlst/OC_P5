// Importation des hooks useEffect et useState depuis React
import { useEffect, useState } from 'react';
// Importation des composants nécessaires et des fichiers CSS
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import image from '../../assets/images/banner-home.jpg';
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import './Home.scss'

// Déclaration et exportation du composant fonctionnel Home
export default function Home() {
    // Déclaration de l'état local 'logements' avec une valeur initiale de tableau vide
    const [logements, setLogements] = useState([]);

    // Utilisation du hook useEffect pour effectuer une requête fetch lors du montage du composant
    useEffect(() => {
        fetch('http://localhost:3000/logements.json')
            .then(response => response.json())
            .then(data => setLogements(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            {/* Inclusion du composant Header */}
            <Header />
            {/* Inclusion du composant Banner avec un titre, une image et un texte alternatif */}
            <Banner title="Chez vous, partout et ailleurs" image={image} alt="Photographie d'un bord de falaise"/>
            <main>
                <section className="home__section">
                    {/* Parcours du tableau 'logements' pour afficher chaque logement sous forme de carte */}
                    {logements.map(logement => (
                        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                    ))}
                </section>
            </main>
            {/* Inclusion du composant Footer */}
            <Footer />
        </>
    )
}