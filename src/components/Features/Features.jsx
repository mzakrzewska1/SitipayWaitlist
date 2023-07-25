import React from 'react'
import './features.css'

const Features = () => {
  return (
      <div className='main-features'>
          
          <div className='title-div'>
              <p>Features</p>
              <h1>Preparing You for <br />
<span>Your Future, Today</span></h1>
          </div>

          <div className='mainLI'>
              <div className='extra-div'>
                <div className='gradient-div'></div>
                <div className='teacher-img-div'></div>
              </div>    
          
              <div className='feature-txt'>
                  <h2>Learn</h2>
                  <p>Expand your financial wisdom with Sitipay's student-focused education, equipping you with knowledge to confidently navigate the complex world of finance.</p>
              </div>
          </div>


          <div className='mainLI main-save'>
                <div className='extra-div'>
                    <div className='gradient-div grad-save'></div>
                  <div className='save-img-div'></div>   
              </div>
              <div className=' feature-txt txt-save'>
                  <h2>Save</h2>
                  <p>Build a secure financial foundation with Sitipay's smart saving feature, effortlessly setting aside funds for unexpected times and cultivating a habit of financial resilience and preparedness.</p>
              </div>
            
          </div>

          <div className='mainLI'>
              <div className='extra-div'>
                  <div className='gradient-div'></div>
                  <div className='student-img-div'></div>
              </div>

              <div className='feature-txt'>
                  <h2>Invest</h2>
                  <p>Unleash the power of growth with Sitipay's intuitive investment tools, empowering students to make confident investment choices.</p>
              </div>
          </div>

    </div>
  )
}

export default Features