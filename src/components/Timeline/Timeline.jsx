import React, { useState } from 'react';
import './Timeline.css'
import ButtonJoin from './../Button-Join/ButtonJoin';
import timeline from '../../img/timeline.svg'
import { HashLink as Link } from 'react-router-hash-link';
import PopUp from '../PopUp/PopUp'

const Timeline = () => {
/*form state*/
    const [email, setEmail] = useState("")
    
 /*popup state*/
    const [open, setOpen] = useState(false);

// handle the google sheet 
    const scriptURL = 'https://script.google.com/macros/s/AKfycby43flG96C8LJFCJaJkQyP32mj2LA1t6Z_44V8xkDpsj8R9o1YYp8YQslAa-SVJNVfoOA/exec'
    const form = document.forms['submit-to-google-sheet']
    
    const handleChange = (e) => {
        setEmail(e.target.value);
     }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
        setOpen(true); 
        setEmail('');
    }

  return (
      <div className='main-timeline' >
          
          <div className='imgGirl'></div>
          <div className='content-timeL'>
              <div className='text-next'>
                  <p>Timeline</p>
                  <h1>What’s Next</h1>
                  <article>Join our waitlist today and start your journey to financial freedom. Empower yourself with knowledge, savings, and investment strategies to thrive in the dynamic landscape of personal finance.</article>

                  <form id="form" onSubmit={handleSubmit} name="submit-to-google-sheet">
                      <input
                          onChange={handleChange}
                          value={email}
                          id='input-join'
                          name="email"
                          type="email"
                          placeholder='Email Address'
                      required/>
                      <ButtonJoin />
                  </form>
                  {open && <PopUp setOpen={setOpen} email={email} />}
                  
              </div>
              <div className='timeline'>
                  <div id='open-div'>
                      <div className="text-31-07">
                      <h3> Open Waitlist</h3>
                      <p>05/08</p>
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

                  <img src={timeline} alt="timeline" id="joinWaitlist"/>
                  
              </div>
          </div>
          
          
    </div>
  )
}

export default Timeline