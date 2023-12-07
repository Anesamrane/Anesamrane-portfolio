import React from 'react'
import Image from 'next/image'
import anespic from '../../../public/photo1701791600.jpeg'
import './Study.css'

function Study() {
  return (
    <div className="Study" id='Study'>
        <h4> Resume <hr /></h4>
        <div className="detail">
        <p>
          <h4>Study And certificat</h4>
          <div className="skill">
          <ul>
              <li>Licence degree in computer science</li>
              <li>Make more then 5 profisional website</li>
              <li>More then 3 year of experience</li>
            </ul>
            <ul>
              <li>participated in hackathon in blida in 2023</li>
              <li>Participated in more then 10 programing event</li>
              <li>Next js</li>
              </ul>
          </div>

          <h4>Language</h4>
          <div className="skill">
          <ul>
              <li>Arabe</li>
              <li>French</li>
              <li>English</li>
            </ul>
            <ul>
              <li>100%</li>
              <li>30%</li>
              <li>60%</li>
              </ul>
          </div>

          <h4>All my skills</h4>
          <div className="skill">
          <ul>
              <li>design and illustration</li>
              <li>ui | ux design</li>
              <li>photograph</li>
              <li>Video editing</li>
              <li>web developpment front end | back end</li>
            </ul>
            <ul>
              <li>Photoshop and adobe illustrator</li>
              <li>Figma and adobe xd</li>
              <li>Taking Photograph</li>
              <li>Lightroom | adobe premier |after effect</li>
              <li>Html | css | javascript | nextjs | php | express</li>
              </ul>
          </div>
          </p>
        </div>
    </div>
  )
}

export default Study