"use client"

import React from 'react'
import Image from 'next/image'
import './Project.css'
import { useState } from 'react'



function Project() {
  const [count, setCount] = useState(1);
  
  const display1 = () =>{
    setCount(1);
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    if (four) {
      four.style.backgroundColor = '#278C7A'
    four.style.color = '#e6e6e6';
    four.style.borderLeft = '5vh solid #278C7A';
    if (five) {
      five.style.backgroundColor = 'transparent';
      five.style.color = '#e6e6e6';
      five.style.borderLeft = '1vh solid #e6e6e6';
      }
      if (six) {
        six.style.backgroundColor = 'transparent';
        six.style.color = '#e6e6e6';
        six.style.borderLeft = '1vh solid #e6e6e6';
        }
    }

  }

  const display2 = () =>{
    setCount(2);
    const five = document.getElementById('five');
    const four = document.getElementById('four');
    const six = document.getElementById('six');
    if (five) {
    five.style.backgroundColor = '#278C7A'
    five.style.color = '#e6e6e6';
    five.style.borderLeft = '5vh solid #278C7A';
    if (four) {
    four.style.backgroundColor = 'transparent';
    four.style.color = '#e6e6e6';
    four.style.borderLeft = '1vh solid #e6e6e6';
    }
    if (six) {
      six.style.backgroundColor = 'transparent';
      six.style.color = '#e6e6e6';
      six.style.borderLeft = '1vh solid #e6e6e6';
      }
  }

  }



  const display3 = () =>{
    setCount(3);
    const five = document.getElementById('five');
    const four = document.getElementById('four');
    const six = document.getElementById('six');
    if (six) {
      six.style.backgroundColor = '#278C7A'
      six.style.color = '#e6e6e6';
      six.style.borderLeft = '5vh solid #278C7A';
    if (four) {
      four.style.backgroundColor = 'transparent';
    four.style.color = '#e6e6e6';
    four.style.borderLeft = '1vh solid #e6e6e6';
    }
    if (five) {
      five.style.backgroundColor = 'transparent';
      five.style.color = '#e6e6e6';
      five.style.borderLeft = '1vh solid #e6e6e6';
      }
  }

  }
  
  return (
    <div className="Project">
        <h4> Project <hr /></h4>
        <div className="detail">


        <div className="list">
         <div>  <button  onClick={display1} id='four'>Website for watching one piece</button> </div> 
         <div> <button  onClick={display2} id='five'>Simple portfolio</button> </div> 
         <div> <button  onClick={display3} id='six'>More of my works</button>  </div>
        </div>


        {count === 1 && (
        <p>
          i develop this website without framework i have a dynamic one
          i spent 1 month to divelop it its my first full stack project and i divelopp it just for fun 
          and to get more experience <br />
          <a href="https://one-piece-static.vercel.app/" target="_blank" rel="noopener noreferrer">Visite the website</a>
        
      

          <h4>Language used</h4>
          <div className="skill">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
            <ul>
              <li>Php</li>
              <li>Mysql</li>
              <li>Ajax</li>
              </ul>
          </div>
          </p>

          )}




{count === 2 && (
        <p>
          i make this portfolio also just for fun i make it in one day because i need 
          portfolio to participate in some event i developp it using next js
          it s my first work using next js
          <br />
          <a href="https://portfolio-psi-blush-81.vercel.app/" target="_blank" rel="noopener noreferrer" >Visite the website</a>
        
      

        <h4>Language used</h4>
          <div className="skill">
            <ul>
              <li>Next js</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
          </div>
          </p>

          )}



{count === 3 && (
        <p>
          i have more project some f it is dynamic so i can t host it using
          vercel
          you can find all of my project by visiting my github account
          <br />
          <a href="https://github.com/Anesamrane" target="_blank" rel="noopener noreferrer">Visite my account</a>
        
      

          
          </p>

          )}


        
        </div>
    </div>
  )
}

export default Project