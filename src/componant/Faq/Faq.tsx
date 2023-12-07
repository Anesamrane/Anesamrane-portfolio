"use client"

import React from 'react'
import Image from 'next/image'
import './Faq.css'
import { useState } from 'react'



function Faq() {
  const [count, setCount] = useState(1);
  
  const display1 = () =>{
    setCount(1);
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    if (one) {
      one.style.backgroundColor = '#278C7A'
    one.style.color = '#e6e6e6';
    one.style.borderLeft = '5vh solid #278C7A';
    if (two) {
      two.style.backgroundColor = 'transparent';
      two.style.color = '#e6e6e6';
      two.style.borderLeft = '1vh solid #e6e6e6';
      }
      if (three) {
        three.style.backgroundColor = 'transparent';
        three.style.color = '#e6e6e6';
        three.style.borderLeft = '1vh solid #e6e6e6';
        }
    }

  }

  const display2 = () =>{
    setCount(2);
    const two = document.getElementById('two');
    const one = document.getElementById('one');
    const three = document.getElementById('three');
    if (two) {
      two.style.backgroundColor = '#278C7A'
    two.style.color = '#e6e6e6';
    two.style.borderLeft = '5vh solid #278C7A';
    if (one) {
      one.style.backgroundColor = 'transparent';
    one.style.color = '#e6e6e6';
    one.style.borderLeft = '1vh solid #e6e6e6';
    }
    if (three) {
      three.style.backgroundColor = 'transparent';
      three.style.color = '#e6e6e6';
      three.style.borderLeft = '1vh solid #e6e6e6';
      }
  }

  }



  const display3 = () =>{
    setCount(3);
    const two = document.getElementById('two');
    const one = document.getElementById('one');
    const three = document.getElementById('three');
    if (three) {
      three.style.backgroundColor = '#278C7A'
      three.style.color = '#e6e6e6';
      three.style.borderLeft = '5vh solid #278C7A';
    if (one) {
      one.style.backgroundColor = 'transparent';
    one.style.color = '#e6e6e6';
    one.style.borderLeft = '1vh solid #e6e6e6';
    }
    if (two) {
      two.style.backgroundColor = 'transparent';
      two.style.color = '#e6e6e6';
      two.style.borderLeft = '1vh solid #e6e6e6';
      }
  }

  }
  
  return (
    <div className="Faq">
        <h4> Faq <hr /></h4>
        <div className="detail">


        <div className="anespic">
         <div>  <button  onClick={display1} id='one'>Who are you</button> </div> 
         <div> <button  onClick={display2} id='two'>Why i have to choose you</button> </div> 
         <div> <button  onClick={display3} id='three'>What about the price</button>  </div>
        </div>


        {count === 1 && (
        <p>
          i m anes amrane a proffisionel in web dévelopmment with a big experience 
          And a good understanding in both frontend and backgend i work with my team
          you never gonna regret if you contact me
      

          </p>

          )}




{count === 2 && (
        <p>
          because i have a BIG exprience so i can help you and because we have a big team with 
          a proffisionel member <br />
          we will be always with you after the end of divelopping your website 
          we gonna offre a special Technical support for you for free

          
          </p>

          )}



{count === 3 && (
        <p>
          i have the best price in this dommaine you can build your website with only 50 dollar
          our prize start from 50 dollar and you can get it with a At lower prices if you are 
          and old client 
          it also depend if the website is personnel or for a community or startup
          we have a special offre for each one <br />
          you will always find a place for you here with us
      

          
          </p>

          )}


        
        </div>
    </div>
  )
}

export default Faq