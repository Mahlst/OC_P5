// Importation des composants nécessaires
import Header from "../../components/Header/Header";
import Error404 from "../../components/Error/Error404";
import Footer from "../../components/Footer/Footer";

// Déclaration et exportation du composant fonctionnel Error
export default function Error() {
    return (
        <>
            {/* Inclusion du composant Header */}
            <Header />
            {/* Inclusion du composant Error404 pour afficher le message d'erreur */}
            <Error404 />
            {/* Inclusion du composant Footer */}
            <Footer />
        </>
    );
}