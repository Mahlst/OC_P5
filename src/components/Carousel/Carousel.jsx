import { useState } from 'react';
import './Carousel.scss'

export default function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='carousel'>
            {props.pictures && props.pictures.length > 1 && (
                <i className="fa-solid fa-chevron-left prev__picture" onClick={handlePrevClick}></i>
            )}
            {props.pictures && (
                <>
                    <img className="carousel__picture" src={props.pictures[currentIndex]} alt={props.title} />
                    <div className="carousel__counter">
                        {props.pictures.length > 1 && (
                            <div className="carousel__counter">
                                {currentIndex + 1}/{props.pictures.length}
                            </div>
                        )}
                    </div>
                </>
            )}
            {props.pictures && props.pictures.length > 1 && (
                <i className="fa-solid fa-chevron-right next__picture" onClick={handleNextClick}></i>
            )}
        </div>
    )
}