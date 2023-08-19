import React from 'react';
// import CV from '../../assets/Sumit-Kosta-Blockchain-Developer.pdf '
import CV from "../../assets/Blockchain-Developer-2Years-(Sumit-Kosta).pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Blockchain-Developer.pdf" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA