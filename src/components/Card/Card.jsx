import { Link } from "react-router-dom";
import './Card.scss'

export default function Card(props) {
    return (
        <article className="home__card">
            <Link to={`/housing/${props.id}`} className="home__card__link">
                <img className="home__card__img" src={props.cover} alt={props.title} />
                <h3 className="home__card__title">{props.title}</h3>
            </Link>
        </article>
    )
}