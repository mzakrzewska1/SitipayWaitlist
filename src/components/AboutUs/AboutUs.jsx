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
                  <div className='about-linked-div'>
                  <p>Product Designer</p>
                      <a href="https://www.linkedin.com/in/thesubomi/" target='_blank'><div className='linkedinIcon'></div></a>
                    </div>
              </div>
              <div className='img-div gosia-div'>
                  <img src={Gosia} alt="pic Gosia" />
                   <div className='about-linked-div'>
                  <p>Front-End Developer</p>
                      <a href="https://www.linkedin.com/in/mzakrzewska1/" target='_blank'><div className='linkedinIcon'></div></a>
                      </div>
              </div>
          </div>
    </div>
  )
}

export default AboutUs