import React from 'react'
import './buttonJoin.css'
import { HashLink as Link } from 'react-router-hash-link'

const ButtonJoin = () => {
  return (
      <div className='btn-join-div' >
          <button className='btn-join' type="submit">Join Waitlist</button>
    </div>
  )
}

export default ButtonJoin