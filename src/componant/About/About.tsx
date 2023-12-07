import React from 'react'
import Image from 'next/image'
import anespic from '../../../public/photo1701791600.jpeg'
import './About.css'

function About() {
  return (
    <div className="about" id='About'>
        <h4> About me <hr /></h4>
        <div className="detail">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugit iure unde earum quas est tempora fuga voluptate expedita
           aliquid totam, ex enim at, ipsam illo, asperiores sed quasi natus! Natus. 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, amet dolores! Optio,
            quis. Quod eaque, iste possimus saepe, 
          cupiditate aut odio consequatur modi iure recusandae debitis eum officiis molestiae veritatis!


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