import React from 'react'
import './popUp.css'

const PopUp = ({ setOpen, email }) => {
    
    const closePopUp = () => {
        setOpen(false)
    }
console.log(email)
  return (
      <div className="popup-container">
          <div className="popup-body">
              <div className='pop-up-text'>
              <h1>Welcome on board!</h1>
              <p>You have successfully joined the waitlist</p>
                </div>
    <button className="btn-popUp" onClick={closePopUp}>Close</button>
     </div>
    </div>
  )
}

export default PopUp