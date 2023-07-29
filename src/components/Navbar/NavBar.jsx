import React, { useState } from 'react'
import SitipayLogo from '../../img/SITIPAY.png'
import './NavBar.css'
import Burgermenu from './Burgermenu'
import { HashLink as Link } from "react-router-hash-link";


const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)
  const toggleBurgermenu = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <div>
    <div className="navBar-main">
      <img src={SitipayLogo} alt='sitipay-logo'></img>
      <ul className='nav-ul'>
        <li className='li-nav'><Link to="#features" smooth>Features</Link></li>
        <li className='li-nav'><Link to="#whySitipay" smooth>Why Sitipay</Link></li>
        <Link to="#joinWaitlist" smooth><li id="btn-extra"><button className='btn-nav'>Join Waitlist</button></li></Link>
      </ul>
      <div className='hamburger' onClick={toggleBurgermenu}>
          <  Burgermenu isOpen={burgerOpen} />
      </div>
      
      </div>
    <div className={`${burgerOpen ? 'show-nav' : 'hide-nav'}`}>
        <ul>
          <li><Link to="#features" smooth>Features</Link></li>
          <li><Link to="#whySitipay" smooth>Why Sitipay</Link></li>
          <li className='li-join'><Link to="#joinWaitlist" smooth>Join Waitlist</Link></li>
        </ul>
      </div>

      </div>
  )
}

export default NavBar