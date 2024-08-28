import './Banner.scss'

export default function Banner(props) {
    return (
        <div className='banner' role='banner'>
            { props.title && <h2 className='banner__title'>{ props.title }</h2> }
            <img className='banner__img' src={props.image} alt={ props.alt } />
        </div>
    )
}