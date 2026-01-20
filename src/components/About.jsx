import React from "react";
import AboutSvg from '../Assets/home/about.svg'

const About = () => {
  return (
    <div className='about-section' >
      <div className="container center mobile-text" style={{ paddingTop: '60px' }} id='about' >
        <h3 className='white-text' style={{ marginTop: '30px', marginBottom: '30px' }} >About Us</h3><br />
        <img src={AboutSvg} className='responsive-img' style={{ marginBottom: '20px',pointerEvents:"none" }} alt="About us image" />
        <p className='white-text' >Founded in January in the year 2009 as Entrepreneurship Cell, MEC and revamped as IEDC MEC under the guidance of Kerala Startup Mission as a Govt. of Kerala initiative in 2015, the Innovation and Entrepreneurship Development Cell of Model Engineering college has constantly worked towards helping the community find an intersection between technology and entrepreneurship. We strongly believe that entrepreneurship is the key to unlock the nation’s true potential and therefore strive to promote the idea of job creation rather than job seeking. By consistently hosting a large number of inspiring and innovative events and through our flagship annual national level symposium- ‘Technopreneur’, IEDC MEC, from its humble beginnings is now one of the best functioning IEDCs in the state.</p>

        <p className='white-text' >IEDC MEC currently acts as a pre-incubator which helps in providing mentorship and support to the projects of our students and help to scale them into potential startup realities. We are funded by the Kerala Startup Mission (KSUM).</p>
        <br />
      </div>
    </div>
  );
};

export default About;
