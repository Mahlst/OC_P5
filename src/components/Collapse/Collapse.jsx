import { useState } from 'react'
import './Collapse.scss'

export default function Collapse({title, content}) {
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }
    return (
         <div className={`collapse ${active && "active"}`}>
            <div className='collapse__title' onClick={handleToggle}>
                {title} <i className="fa-solid fa-chevron-up collapse__icon"></i>
            </div>
            <div className='collapse__content'>
                {content}
            </div>
        </div>
    )
}