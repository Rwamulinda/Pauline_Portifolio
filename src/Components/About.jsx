// src/components/Navigationsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the main CSS file
//import backgroundImage from './Image/back.jpg'; // Import the background imag
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Navigation = () => {

  
  const projects = [
    {
      title: "Shora Neza Digital Platform",
      description: "Shora Neza is a project of GNI and WFP and this the platform that will help them to track the performance of farmers.",
      imageURLs: ["shora.png"], // Add your image URLs here
    },

    // Add more projects as needed
  ];
  useEffect(() => {
    // Cursor logic
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
  
    if (cursorDot && cursorOutline) {
      document.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;
  
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
  
        cursorOutline.style.left = `${posX-10}px`; // Adjust for the cursor dot size
        cursorOutline.style.top = `${posY-10}px`; // Adjust for the cursor dot size
      });
    } else {
      console.error('Cursor elements not found');
    }
    // Smooth scrolling logic
    const scrollItems = document.querySelectorAll('.scroll-item');
    scrollItems.forEach(item => {
      item.addEventListener('click', scrollToSection);
    });

    return () => {
      scrollItems.forEach(item => {
        item.removeEventListener('click', scrollToSection);
      });
    };
  }, []);

  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  // Empty dependency array ensures the effect runs only once after component mount

  const resumeUrl = "https://drive.google.com/file/d/1_M27os0QY5_PWXz-aaUi_KznAy7rBx_5/view?usp=sharing"; // Your Google Drive URL
  return (
    <div className="main-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about" className="scroll-item">About</a></li>
          <li><a href="#portfolio" className="scroll-item">Portfolio</a></li>
          <li><a href="#contact" className="scroll-item">Contact</a></li>
          <li><a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-button">Resume</a></li>
        </ul>
      </nav>
      <div 
        className="animated-dot"
         style={{ 
          position: 'absolute', 
          top: '30px', 
          left: '18px', 
          width: '18px', 
          height: '18px', 
          backgroundColor: 'orangered', 
          borderRadius: '50%', 
          display: 'inline-block', 
          verticalAlign: 'middle',
          transition: 'background-color 0.3s', 
          // Add transition for smooth color change
        }}
      ></div>
      {/* Name */}
      <h1 style={{ marginLeft: '40px', display: 'inline-block', verticalAlign: 'middle', position:'absolute',top:'11px', fontFamily:'helvetica',fontSize:'25px', color:'#1f1b1b' }}>Pauline Uwase</h1>
      <section className="portfolio-intro">
       <div className='me2'>
        <h1><b>I'm Pauline, a software and UI/UX Engineer based in Kigali</b>
        </h1>
        </div>
        <div className='myIntroAbout'>
         <p>👋 Hello there! I'm Pauline, a passionate advocate for crafting seamless and delightful user experiences. Currently pursuing my Masters in Information Technology at Carnegie Mellon University, I thrive on the intersection of user needs and business objectives in product design.</p>
         <p>🎨 With a keen eye for detail and a drive to create products that are both usable and useful, I bring a unique blend of UI/UX expertise and product management skills to the table. I believe that the key to success lies in understanding the intricate balance between what users want and what businesses need.</p>
         <p>💼 With diverse experience in the software development industry, I've honed my abilities to bridge the gap between technical implementation and user-centric design. My mission is to ensure that every product I work on not only meets the needs of its users but also aligns with the overarching goals of the organization. </p>
         <p>🌍 Beyond my professional pursuits, I'm a firm believer in the power of leadership and the importance of making small, positive impacts for a better world. </p>
         <p>Thanks for visiting my portfolio! Let's connect and explore how we can collaborate to bring innovative ideas to life. 🚀 </p>
         </div>
        </section>
        <hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'60px' }} />
      {/*<section id="about" className="portfolio-section">
        <h1>About</h1>
        <p>My introduction:<br/></p>
        <div className="about-icon">
          <img src={require('../Components/Image/icon.png')} alt="icon" className="intro-image" />
      </div>
        <div className="about-intro">
    
        <p>I am currently pursuing a Master's Degree in Information Technology (IT) from Carnegie Mellon University Africa.</p>
        <p>I have worked on multiple web development and data science projects.</p>
        
        <div>
          <p>4+ Years experience</np>
          <p>7+ Completed projects</p>
          <p>01 Companies worked</p>qw
          <a href="https://drive.google.com/file/d/1_M27os0QY5_PWXz-aaUi_KznAy7rBx_5/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
  </div>
        </div>
  </section>*/}

<section id="skills" className="portfolio-section"style={{ position: 'relative' }}>
  <div style={{ position: 'absolute',marginLeft:'75px', top: '15%', left: '0', transform: 'translateY(-50%)', width: '20px', height: '20px', backgroundColor: 'blue' }}></div>
  <h1 style={{ marginLeft:'100px',marginBottom:'40px' }}>Skills</h1>
  <div className="skills-container">
    <div className="skills-column">
      <div className="skill">
        <div className="skill-title">Software Engineering</div>
         <p>Programming using React, Node js, HTML,CSS(Vanilla), tailwind,Javascript, Python</p>
         <p> OOD( Object Oriented Design) using draw.io on sequence diagrams, class Diagram and use cases</p>
         <p> Agile
         <p> Design Patterns</p>
         <p> Testing(Unit and Integration)</p>
         <p> Database( postGreSQL and MongoDB) </p>
         <p> API documentation using Swagger</p>
         <p> Code quality analysis using tools like Sigrid</p>
         </p>
      </div>
    </div>
    <div className="skills-column">
      <div className="skill">
        <div className="skill-title">UI/UX Skill Set</div>
        <p>User Centered Design</p>
        <p>User Research</p>
        <p>prototyping using Figma and FlutterFlow</p>
        <p> User Testing</p>
      </div>
      <div className="skill">
        <div className="skill-title">Other Skills</div>
        <p>Leadership skills with 5 years of experience </p>
        <p>Communication and Public speaking</p>
        <p>Product designing and management</p>
        <p>Market Research</p>
      </div>
    </div>
   </div>
  
</section>
<div style={{ marginTop: '40px',textAlign:'center' }}>
<a href="https://drive.google.com/file/d/1_M27os0QY5_PWXz-aaUi_KznAy7rBx_5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button style={{ backgroundColor: 'orangered', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>View Resume</button>
</a>
</div>

<hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'50px' }} />
    <section id="contact" className="portfolio-section" style={{textAlign: 'center', position: 'relative', paddingLeft: '50px', paddingRight: '50px', top:'-9px' }}>
      <div style={{ width: '18px', height: '18px', backgroundColor: 'green', borderRadius: '50%', marginTop:'27px', marginRight:'4px'}}></div>
      <h1>Contacts </h1>
       <div style={{ textAlign: 'left', marginLeft: '150px'}}>
        <ul style={{ listStyleType: 'none', padding: '0' , marginTop:'50px'}}>
          <li style={{ display: 'inline-block', marginRight: '20px',fontWeight:'bold' }}>
            <img src={require('../Components/Image/gmail.png')} alt="Email Icon" style={{ marginRight: '5px', width: '15px', height: '15px' }} />
             Email: uwaspaulina7@gmail.com</li>
          <li style={{ display: 'inline-block', marginRight: '20px', fontWeight:'bold' }}>
            <img src={require('../Components/Image/linkedin.png')} alt="Email Icon" style={{ marginRight: '5px', width: '15px', height: '15px' }} />
             LinkedIn: <a href="https://www.linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li style={{ display: 'inline-block', fontWeight:'bold'}}>
          <img src={require('../Components/Image/whatsapp.png')} alt="Email Icon" style={{ marginRight: '5px', width: '15px', height: '15px' }} />
            WhatsApp: <a href="https://wa.me/+250780827828">+250780827828</a></li>
        </ul>
      </div>
      </section>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default Navigation;