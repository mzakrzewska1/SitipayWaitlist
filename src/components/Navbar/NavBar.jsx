import React from 'react'
import SitipayLogo from '../../img/SITIPAY.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className="navBar-main">
      <img src={SitipayLogo} alt='sitipay-logo'></img>
      {/* <ul className='nav-ul'>
        <li className='li-nav'>Features</li>
        <li className='li-nav'>Why Sitipay</li>
        <li><button className='btn-nav'>Join Waitlist</button></li>
      </ul> */}
    </div>
  )
}

export default NavBar