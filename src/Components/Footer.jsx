// eslint-disable-next-line no-unused-vars
import React from 'react'
import DHLOGO from '../../public/images/DH.png'
import FacebookLogo from '../../public/images/ico-facebook.png'
import InstagramLogo from '../../public/images/ico-instagram.png'
import TiktokLogo from '../../public/images/ico-tiktok.png'
import WhatsappLogo from '../../public/images/ico-whatsapp.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
          <div className="footer-left">
            <p>Powered by</p>
            <img src={DHLOGO} alt='DH-logo' />
          </div>
          <div className="footer-right">
            <img src={FacebookLogo} alt="Facebook" />
            <img src={InstagramLogo} alt="Instagram" />
            <img src={TiktokLogo} alt="TikTok" />
            <img src={WhatsappLogo} alt="WhatsApp" />
          </div>
        </div>
    </footer>
  )
}

export default Footer
