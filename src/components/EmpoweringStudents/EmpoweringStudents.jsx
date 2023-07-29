import React from 'react'
import './EmpoweringStudents.css'
import ButtonJoin from '../Button-Join/ButtonJoin'
import { HashLink as Link } from "react-router-hash-link";

const EmpoweringStudents = () => {
  return (
    <div className='main-empower'>
          <div className='emp-content'>
              <div className='emp-left'>
                  <h1>Empowering students for <span>Financial Success</span></h1>
                  <p>We understand that financial knowledge is crucial for student success in today's world. That's why we've created a platform that goes beyond basic finance apps.
                  </p>
                  <Link to="#joinWaitlist"><div> <ButtonJoin className="btn-media" /></div> </Link>
              </div>
              <div id="div-img">
                  <div className="emp-img" alt="studentsEmpowering"></div>
              </div>
          </div>
    </div>
  )
}

export default EmpoweringStudents