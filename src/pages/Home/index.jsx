import { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import image from '../../assets/images/banner-home.jpg';
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import './Home.scss'

export default function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/logements.json')
            .then(response => response.json())
            .then(data => setLogements(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" image={image} alt="Photographie d'un bord de falaise"/>
            <main>
                <section className="home__section">
                    {logements.map(logement => (
                        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}