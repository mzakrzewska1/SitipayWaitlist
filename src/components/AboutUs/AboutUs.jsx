import React from 'react'
import './aboutUs.css'
import Subomi from '../../img/SubomiPic.svg'
import Gosia from '../../img/GosiaPic.svg'


const AboutUs = () => {
  return (
      <div id='about-main'>
          <div className='title-div'>
              <p>The Team</p>
              <h1>Get to Know <span>Us</span></h1>
              <article id="arti-text">We are driven by a shared passion for empowering students and enabling financial freedom. Meet our dynamic team, composed of two young and dedicated individuals who believe in the transformative power of smart finance.</article>
          </div>
          <div className='photos-div'>
              <div className='img-div subomi-div'>
                  <img src={Subomi} alt="pic Subomi" />
                  <p>Product Designer</p>
              </div>
              <div className='img-div gosia-div'>
                  <img src={Gosia} alt="pic Gosia" />
                   <p>Front-End Developers</p>
              </div>
          </div>
    </div>
  )
}

export default AboutUs