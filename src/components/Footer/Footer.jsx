import './Footer.scss'
import logo from '../../assets/images/logo.svg'

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={logo} alt="Logo Kaza" />
            <p className='footer__copyright'>© 2024 Kasa. All rights reserved</p>
        </footer>
    )
}