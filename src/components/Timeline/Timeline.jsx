import React, { useState } from 'react';
import './Timeline.css'
import ButtonJoin from './../Button-Join/ButtonJoin';
import timeline from '../../img/timeline.svg'

const Timeline = () => {

    const [email, setEmail] = useState("")
    

    const handleChange = (e) => {
        setEmail(e.target.value);
    //    setEmail({...email, [e.target.name]:e.target.value})
     }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // logic here sending to server or whatever???
        alert(`You joined the waitlist with the email:  ${email}`);
        setEmail('');
    }


  return (
      <div className='main-timeline'>
          
          <div className='imgGirl'></div>
          <div className='content-timeL'>
              <div className='text-next'>
                  <p>Timeline</p>
                  <h1>What’s Next</h1>
                  <article>Join our waitlist today and start your journey to financial freedom. Empower yourself with knowledge, savings, and investment strategies to thrive in the dynamic landscape of personal finance.</article>

                  <form id="form" onSubmit={handleSubmit}>
                      <input
                          onChange={handleChange}
                          value={email}
                          id='input-join'
                          name="email"
                          type="email"
                          placeholder='Email Address' />
                      <ButtonJoin />
                  </form>
            
              </div>
              <div className='timeline'>
                  <div id='open-div'>
                      <div className="text-31-07">
                      <h3> Open Waitlist</h3>
                      <p>31/07</p>
                      </div>
                  </div>
                  <div className='dates-div'>
                  <div className='timeline-dates'>
                      <h3>Final Prototype</h3>
                      <p>24/08</p>
                  </div>

                  <div className='timeline-dates'>
                      <h3>Launch</h3>
                      <p>18/09</p>
                      </div>
                      
                      </div>

                  <img src={timeline} alt="timeline" />
                  
              </div>
          </div>
          
          
    </div>
  )
}

export default Timeline