// Importation des composants nécessaires et des fichiers CSS
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import image from '../../assets/images/banner-about.jpg';
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import './About.scss'

// Déclaration et exportation du composant fonctionnel About
export default function About() {
    return (
        <>
            {/* Inclusion du composant Header */}
            <Header />
            {/* Inclusion du composant Banner avec une image et un texte alternatif */}
            <Banner image={image} alt="Photographie d'une chaîne de montagnes avec un fleuve passant au milieu"/>
            <main>
                <section className="about__section">
                    {/* Inclusion du composant Collapse pour la section Fiabilité */}
                    <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                    {/* Inclusion du composant Collapse pour la section Respect */}
                    <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                    {/* Inclusion du composant Collapse pour la section Service */}
                    <Collapse title="Service" content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."/>
                    {/* Inclusion du composant Collapse pour la section Sécurité */}
                    <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
                </section>
            </main>
            {/* Inclusion du composant Footer */}
            <Footer />
        </>
    )
}