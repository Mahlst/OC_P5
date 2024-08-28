import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import image from '../../assets/images/banner-about.jpg';
import Footer from "../../components/Footer/Footer";

export default function About() {
    return (
        <>
            <Header />
            <Banner image={image} alt="Photographie d'une chaîne de montagnes avec un fleuve passant au milieu"/>
            <Footer />
        </>
    )
}