// Importation du composant Link depuis react-router-dom pour la navigation
import { Link } from "react-router-dom";
// Importation du fichier CSS pour les styles du composant
import './Error404.scss'

// Déclaration et exportation du composant fonctionnel Error404
export default function Error404() {
    return (
        // Élément main avec la classe CSS 'main__404'
        <main className="main__404">
            {/* Élément h1 avec la classe CSS 'title__404' pour afficher le code d'erreur 404 */}
            <h1 className="title__404">404</h1>
            {/* Élément p avec la classe CSS 'text__404' pour afficher le message d'erreur */}
            <p className="text__404">Oups! La page que vous demandez n'existe pas.</p>
            {/* Composant Link pour retourner à la page d'accueil */}
            <Link className="link__404" to="/">Retourner sur la page d’accueil</Link>
        </main>
    );
}