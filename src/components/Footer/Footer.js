import './Footer.css'
import whiteLogo from '../../assets/white_logo.png'

function Footer() {
    return (
        <footer>
            <img src= {whiteLogo} alt='logo Kasa blanc' className='footer__logo'/>
            <p>© 2020 Kasa. All right reserved</p>
        </footer>
    )
  }
  
  export default Footer