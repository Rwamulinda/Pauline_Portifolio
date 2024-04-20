// src/components/Navigationsx
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the main CSS file
//import backgroundImage from './Image/back.jpg'; // Import the background imag
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Navigation = () => {

  const [isProjectSection, setIsProjectSection] = useState(false);
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

    const handleScroll = () => {
      const projectSection = document.getElementById("portfolio");
      if (projectSection) {
        const { top, bottom } = projectSection.getBoundingClientRect();
        if (top <= 0 && bottom > 0) {
          setIsProjectSection(true);
        } else {
          setIsProjectSection(false);
        }
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };

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

          <li><Link to="/about" className={`scroll-item ${isProjectSection ? 'active' : ''}`}>About</Link></li>
          <li><a href="#portfolio" className={`scroll-item ${isProjectSection ? 'active' : ''}`}>Portfolio</a></li>
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
      <h1 style={{ marginLeft: '40px', display: 'inline-block', verticalAlign: 'middle', position:'absolute',top:'15px', fontFamily:'Cascadia Mono Light,sans serif',fontSize:'large', color:'#1f1b1b' }}>Pauline Uwase</h1>
      <section className="portfolio-intro">
       <div className='me'>
        <h1>
         <span>Helloo<span role="img" aria-label="Waving Hand" style={{ fontSize: '30px', scrollSnapMarginRight:'250px' }}>&#x1F44B;</span></span>
        </h1>
        </div>
        <div className='myIntro'>
         <p>I'm Pauline Uwase. I am a Softwrae Engineer and UI/UX.</p>
         <p>I design and Code beutifully, and I love what I do.</p></div>
        <div className="profile-pic-container">
          <img src={require('../Components/Image/Pauline.jpg')} alt="Profile" className="profile-pic" />
          
        </div>
        </section>
        <hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'-150px' }} />
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
      <section id="portfolio" className="portfolio-section">
       {/*<h1 className="portfolio-title">Projects</h1>*/}
         {/* Render portfolio projects */}
         {projects.map((project, index) => (
          <div key={index} className="portfolio-project">
            <div className="project-details" >
              <div className="project-title" style={{ marginLeft: '180px'}}>
                <div className="orange-dot"></div>
                <h2>{project.title}</h2>
              </div>
             <div className="project-description">
              <p>{project.description}</p>
           </div>
         </div>
         
         <div className="view-project-container">
          <a href="https://shoraneza.huzalabs.com/landing" className="view-project-button">View Project
            <span className="arrow"></span>
          </a>
          </div>
          <div className="project-images">
              {project.imageURLs.map((image, idx) => (
                <img key={idx} src={require(`../Components/Image/${image}`)} alt={`Project ${index + 1}`} />
                
          ))}
          <hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'80px' }} /> 
          <div className="portfolio-project">
           <div className="project-details">
            <div className="project-title" style={{ marginLeft: '180px' }}>
              <div style={{ width: '15px', height: '15px', backgroundColor: '#4367c9', marginRight: '10px', position:'absolute', top:'30%', left:'-25px'}}></div>
              <h2>Adress Book using Ionic framework and Vue JS</h2>
            </div>
            <div className="project-description">
              <p>This application has CRUD functions where you add, delete, read, and update the contact and it has Resfull API and Database.</p>
            </div>
          </div>
          <div className="view-project-container">
            {/* Add your link for the second project */}
            <a href="" className="view-project-button">View Project
            <span className="arrow"></span>
          </a>
          </div>
          <div className="project-images">
            {/* Add your images for the second project */}
            <img src={require('../Components/Image/Second.png')} alt="Second Project" style={{ width: '800px', height: 'auto' }} />
          </div>
          <hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'80px' }} /> 
          <div className="portfolio-project">
           <div className="project-details">
            <div className="project-title" style={{ marginLeft: '180px' }}>
              <div style={{ width: '15px', height: '15px', backgroundColor: 'green', marginRight: '10px', position:'absolute', top:'30%', left:'-25px'}}></div>
              <h2>OIMs(Open Inventory Management System)</h2>
            </div>
            <div className="project-description">
              <p>This system is for helping UR-CST(University of Rwanda,College of Science and Technology) to manage their assets, generate digital asset tags and alert the asset manager if the asset needs mentainace..etc I have attached the link to show how system works on 11 min is when I started to demo. Tools we used was node js, postGreSQL and React</p>
            </div>
          </div>
          <div className="view-project-container">
            {/* Add your link for the second project */}
            <a href="" className="view-project-button">View Project
            <span className="arrow"></span>
          </a>
          </div>
          <div className="project-images">
            {/* Add your images for the second project */}
            <img src={require('../Components/Image/oims.png')} alt="Second Project" style={{ width: '800px', height: 'auto' }} />
            </div> 
          <hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'80px' }} />  
          <div className="portfolio-project">
           <div className="project-details">
            <div className="project-title" style={{ marginLeft: '180px' }}>
            <div style={{ width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid orangered', marginRight: '10px', position:'absolute', top:'50%', left:'-25px' }}></div>
              <h2>ESN(Emergency Social Network)</h2>
            </div>
            <div className="project-description">
              <p>This the UI for ESN and ESN is social network web app where members of that community will be able login and chat, or post some emergency case. I used Figma to design the interfaces</p>
            </div>
          </div>
          <div className="view-project-container">
            {/* Add your link for the second project */}
            <a href="" className="view-project-button">View Project
            <span className="arrow"></span>
          </a>
          </div>
          <div className="project-images">
            {/* Add your images for the second project */}
            <img src={require('../Components/Image/ux.png')} alt="Second Project" style={{ width: '700px', height: 'auto' }} />
            </div>  
          </div>   
          </div>
          </div>
          </div>
          </div>


        ))}
       
      </section>
      <hr style={{ borderTop: '1px solid #555', width: '90%', opacity: 0.5, marginTop:'-90px' }} />

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