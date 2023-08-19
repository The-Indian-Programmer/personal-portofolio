import React from 'react';
import './about.css';
import ME from '../../assets/sumitkosta.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="nazirsharifi__image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Enthusiastic Full Stack Blockchain Developer proficient in a wide array of technologies, with expertise in blockchain development and full
            stack solutions. Skilled in creating and deploying Smart Contracts using Solidity and Ethereum, building decentralized applications (DApps)
            with Web3.js, and ensuring seamless user experiences. Experienced in Advanced JavaScript, Node.js, React.js, and Express.js for delivering
            robust and responsive web applications. Proficient in MySQL for efficient data management. Actively contribute to collaborative development
            through Git. Keen to leverage my comprehensive skill set in blockchain and full stack development to drive innovative projects.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About