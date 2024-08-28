import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import image from '../../assets/images/banner-home.jpg';
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" image={image} alt="Photographie d'un bord de falaise"/>
            <Footer />
        </>
    )
}