import { Link } from "react-router-dom";
import './Error404.scss'

export default function Error404() {
    return (
        <main className="main__404">
            <h1 className="title__404">404</h1>
            <p className="text__404">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link__404" to="/">Retourner sur la page d’accueil</Link>
        </main>
    );
}