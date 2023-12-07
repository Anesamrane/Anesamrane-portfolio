import React from 'react';
import './navbar.css';

function Navbar() {
  const scrollTo = (top: number) => {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
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
  );
}

export default Navbar;
