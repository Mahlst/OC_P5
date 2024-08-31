import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Housing() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/logements.json`)
            .then(response => response.json())
            .then(data => {
                const foundLogement = data.find(logement => logement.id === id);
                setLogement(foundLogement);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <>
            <Header />
            <main>
                {logement && <Carousel pictures={logement.pictures} title={logement.title} />}
            </main>
            <Footer />
        </>
    )
}