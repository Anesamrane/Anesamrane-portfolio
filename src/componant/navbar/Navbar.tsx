import React from 'react';
import './navbar.css';
import { FaFacebook, FaInstagram, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useEffect } from 'react';

function Navbar() {
  const scrollTo = (top: number) => {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };


  

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      const socialDiv = document.querySelector(`.social`) as HTMLElement | null;
      if (socialDiv) {
        const scrollPosition = window.scrollY;
  
        // Adjust styles based on scroll position
        if (scrollPosition >= 2045.333251953125) {
          socialDiv.style.transform = 'scale(1.2) translateX(-140%)';
        } else {
          socialDiv.style.transform = 'scale(1) translateX(0)';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div>
      <div className="social">
        <a href='https://www.facebook.com/anes.amrane.35/' target="_blank"><FaFacebook /></a>
        <a href='https://www.instagram.com/anesamrane/' target="_blank"><FaInstagram /></a>
        <a href='https://github.com/Anesamrane' target="_blank"><FaGithub /></a>
        <a href='https://discordapp.com/users/1026406619527004190' target="_blank"><FaDiscord /></a>
        <a href='https://www.linkedin.com/in/anes-amrane-a33776292/' target="_blank"><FaLinkedin /></a>
        <a href='mailto:anesamrane9@gmail.com'><MdEmail /></a>
      </div>
      <div className="social2">
        <a href='https://www.facebook.com/anes.amrane.35/' target="_blank"><FaFacebook /></a>
        <a href='https://www.instagram.com/anesamrane/' target="_blank"><FaInstagram /></a>
        <a href='https://github.com/Anesamrane' target="_blank"><FaGithub /></a>
        <a href='https://discordapp.com/users/1026406619527004190' target="_blank"><FaDiscord /></a>
        <a href='https://www.linkedin.com/in/anes-amrane-a33776292/' target="_blank"><FaLinkedin /></a>
        <a href='mailto:anesamrane9@gmail.com'><MdEmail /></a>
      </div>
    <div className='navwall'>
      <button>
        <a href="mailto:anesamrane9@gmail.com">Hire me</a>
      </button>
      <nav className="navbar">
        {/* Add the href attribute with a value or use a custom onClick handler */}
        <a onClick={() => scrollTo(550)}>About me</a>
        <a onClick={() => scrollTo(1100)}>Faq</a>
        <a onClick={() => scrollTo(1400)}>Resume</a>
        <a onClick={() => scrollTo(1985)}>Project</a>
        <a onClick={() => scrollTo(2300)}>Contact</a>
      </nav>
    </div>
    </div>
  );
}

export default Navbar;
