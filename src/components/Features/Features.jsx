import Collapse from '../Collapse/Collapse';
import './Features.scss';

export default function Features(props) {
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i key={i} className={`fa-star ${i <= rating ? 'fa-solid' : 'fa-solid emply'}`}></i>
            );
        }
        return stars;
    };

    const renderEquipments = (equipments) => {
        return (
            <ul>
                {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <div className='features'>
                <div className='features__info'>
                    <h2 className='features__info__title'>{props.title}</h2>
                    <p className='features__info__location'>{props.location}</p>
                    <div className='features__info__tags'>
                        {props.tag && props.tag.length > 0 && props.tag.map((tag, index) => (
                            <button className='features__info__tags--btn' key={index}>{tag}</button>
                        ))}
                    </div>
                </div>

                <div className='features__host__container'>
                    <div className='features__host'>
                        <h3 className='features__host__title'>
                            {props.host.split(' ')[0]}<br />{props.host.split(' ')[1]}
                        </h3>
                        <img className='features__host__picture' src={props.picture} alt={props.host}/>
                    </div>
                    <div className='features__rating'>
                        {renderRating(props.rating)}
                    </div>
                </div>
            </div>
            <div className='features__collapse'>
                <div className='features__collapse__container'>
                    <Collapse title="Description" content={props.description}/>
                </div>
                <div className='features__collapse__container'>
                    <Collapse title="Équipements" content={renderEquipments(props.equipments)}/>
                </div>
            </div>
        </>        
    );
}
