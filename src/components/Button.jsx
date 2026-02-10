import React from 'react'

const Button = ({ text, className }) => {
  return (
    <a href="/images/GUILHERME COSME DOS SANTOS 2025.pdf"
    download
     className={`${className ?? ''} cta-wrapper group`}>
      <div className="cta-button text ">
        <p className="text">{text}</p>
      </div>
    </a>
  );
};

export default Button;
