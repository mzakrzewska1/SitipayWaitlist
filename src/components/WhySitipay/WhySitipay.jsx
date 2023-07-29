import React from 'react'
import './whysitipay.css'
import schoolIcon from '../../img/school.svg'
import pigIcon from '../../img/savings.svg'
import dollarIcon from '../../img/currency_exchange.svg'

const WhySitipay = () => {
  return (
      <div className='main-why' id="whySitipay">

          <div className='title-div title-margin'> 
              <p>Why Sitipay</p>
            <h1>Preparing You for <br />
                <span>Your Future, Today</span></h1>
          </div>
          <div className='cards-div'>
              <div className='why-card'>
                  <h3>Financial Education</h3>
                  <img src={schoolIcon} alt="icon" />
                  <p>Stay informed and make smart financial decisions.</p>
              </div>

              <div className='why-card'>
                  <h3>Financial Education</h3>
                  <img src={pigIcon} alt="icon" />
                  <p>Stay informed and make smart financial decisions.</p>
              </div>

              <div className='why-card'>
                  <h3>Financial Education</h3>
                  <img src={dollarIcon} alt="icon" />
                  <p>Stay informed and make smart financial decisions.</p>
              </div>

          </div>
    </div>
  )
}

export default WhySitipay