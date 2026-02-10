import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
   
    const handleScroll = () => {
      
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    
    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
         Dev | Gui
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
            <a
            href={link} 
            target={link.startsWith("http") ? "_blank" : "_self"}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
             >
                  <span>{name}</span>
                 
            </a>
            </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;