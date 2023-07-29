import React from 'react'
import './burgermenu.css'

const Burgermenu = ({isOpen}) => {
  return (
      <div className='hamburger'>
      <div className={ isOpen? ' burger transition1' : 'burger'}></div>
          <div className={ isOpen? 'burger transition2' : 'burger'}></div>
          <div className={ isOpen? 'burger transition3' : 'burger'}></div>
    </div>
  )
}

export default Burgermenu