import React from "react";
import AboutSvg from '../Assets/svgs/about.svg'

const About = () => {
  return (
    <div className='about-section' >
      <div className="container center" style={{ paddingTop: '60px' }} id='about' >
        <h3 className='white-text' style={{ marginTop: '30px', marginBottom: '30px' }} >About Us</h3>
        <img src={AboutSvg} className='responsive-img' style={{ marginBottom: '20px' }} alt="About us image" />
        <p className='white-text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis nisi doloremque! Rerum magni sunt unde assumenda mollitia, placeat nam enim, quis aspernatur eius doloribus consectetur velit aut quas necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti debitis tempora repellendus quam, obcaecati perferendis fugit quo ut error, asperiores est harum explicabo nesciunt at quia non nulla a quidem.</p>

        <p className='white-text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis nisi doloremque! Rerum magni sunt unde assumenda mollitia, placeat nam enim, quis aspernatur eius doloribus consectetur velit aut quas necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti debitis tempora repellendus quam, obcaecati perferendis fugit quo ut error, asperiores est harum explicabo nesciunt at quia non nulla a quidem.</p>
      </div>
    </div>
  );
};

export default About;
