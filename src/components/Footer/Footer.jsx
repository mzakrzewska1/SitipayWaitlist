import React from 'react'
import './footer.css'
import SitipayLogo from '../../img/SITIPAY.png'

const Footer = () => {
  return (
    <div id='main-footer'>
          <div className='foot-contnt'>
                <div className='footer-logo'>
                  <img src={SitipayLogo} alt="logo Sitipay" />
                  <h3>Where education meets smart finance.</h3>
                </div>
              <div className='foot-txt'>
                  <p>Copyright ©2023 Sitipay</p>
              </div>
            
        </div>
    </div>
  )
}

export default Footer