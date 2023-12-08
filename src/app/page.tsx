/* eslint-disable react/no-unescaped-entities */
"use client"

import styles from "@/app/page.module.css"
import About from '@/componant/About/About'
import Contact from '@/componant/Contact/Contact'
import Faq from '@/componant/Faq/Faq'
import Study from '@/componant/Study/Study'
import Project from '@/componant/Project/Project'
import Navbar from '@/componant/navbar/Navbar'
import React from 'react'
import { useEffect } from "react"

function page() {


/*
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = document.querySelector(`.about`) as HTMLElement | null;
      const contactDiv = document.querySelector(`.contact`) as HTMLElement | null;
  
      if (aboutDiv) {
        console.log('first')
        const scrollPosition = window.scrollY;
        const aboutTransform = scrollPosition >= 250 ? 'translateX(-50%)' : 'translateX(0)';
        aboutDiv.style.transform = aboutTransform;
      }
  
      if (contactDiv) {
        console.log('anes');
        const scrollPosition = window.scrollY;
        const contactTransform = scrollPosition >= 1300 ? 'translateX(-50%)' : 'scale(1) translateX(0)';
        contactDiv.style.transform = contactTransform;
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  */
  

    const scrollTo = () => {
      window.scrollTo({
        top: 550,
        behavior: 'smooth',
      });
    };

  return (
    <div>
            <Navbar />

      <div className={styles.detail}>
        <h4>I'm a full stack divelepper </h4>
        <h1>Let's build amazing things</h1>
        <p>Passionate Web Developer dedicated to creating stunning 
          and user-friendly websites. With a keen eye for design and a knack
           for problem-solving, I transform ideas into interactive and responsive digital experiences. 
          Let's collaborate to bring your vision to life!</p>
          <button onClick={scrollTo}>Discover more</button>

          <hr />
      </div>






      <div className={styles.about}>
      <About />
      </div>
      <div className={styles.contact}>
      <Contact />
      </div >
      <div className={styles.faq}>
      <Faq />
      </div>
      <div className={styles.project}>
      <Project />
      </div>
      <div className={styles.study}>
      <Study />
      </div>

    </div>
  )
}

export default page