/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import anespic from '../../../public/photo1701791600.jpeg'
import './About.css'

function About() {
  return (
    <div className="about" id='About'>
        <h4> About me <hr /></h4>
        <div className="detail">
        <p>i'm Anes amrane a full stack divelopper i have more then 3 year experience and 
          i build more then 10 website with different technologies and with different features
          i born in 5 january 2002 in algeria i study computer science in saad dahleb in blidai success
          in my bacalouria with 13:50 i have been building and deploying website all my hole life 

          <h4>My skills in dev web</h4>
          <div className="skill">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
            <ul>
              <li>Php</li>
              <li>Mysql</li>
              <li>Next js</li>
              </ul>
          </div>
          </p>
        <div className="anespic">
        <Image src={anespic} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About