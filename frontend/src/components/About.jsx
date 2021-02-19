import React from "react";
import AboutSvg from '../Assets/home/about.svg'

const About = () => {
  return (
    <div className='about-section' >
      <div className="container center mobile-text" style={{ paddingTop: '60px' }} id='about' >
        <h3 className='white-text' style={{ marginTop: '30px', marginBottom: '30px' }} >About Us</h3><br />
        <img src={AboutSvg} className='responsive-img' style={{ marginBottom: '20px' }} alt="About us image" />
        <p className='white-text' >Founded in January in the year 2009 as Entrepreneurship Cell, MEC and revamped as IEDC MEC under the guidance of Kerala Startup Mission as a Govt. of Kerala initiative in 2015, the Innovation and Entrepreneurship Development Cell of Model Engineering college has constantly worked towards helping the community find an intersection between technology and entrepreneurship. We strongly believe that entrepreneurship is the key to unlock the nation’s true potential and therefore strive to promote the idea of job creation rather than job seeking. By consistently hosting a large number of inspiring and innovative events and through our flagship annual national level symposium- ‘Technopreneur’, IEDC MEC, from its humble beginnings is now one of the best functioning IEDCs in the state.</p>

        <p className='white-text' >IEDC MEC currently acts as a pre-incubator which helps in providing mentorship and support to the projects of our students and help to scale them into potential startup realities. We are funded by the Kerala Startup Mission (KSUM).</p>
        <br />
        <a className="btn modal-trigger" href="#modal1" style={{ 'color': '#BF2200', 'background-color': 'white', 'font-weight': '500' }}>
          <i className="material-icons right">arrow_forward</i>
							Read More
			  </a>
        <div id="modal1" class="modal modal-fixed-footer">
          <div class="modal-content">
            <div className="modal-container">
              <h5>Technopreneur</h5>
              <p>Technopreneur, the flagship event of IEDC MEC is the annual entrepreneurial and managerial symposium of MEC which weaves the perfect symphony of technology meeting entrepreneurship. Over the years it has attracted the best minds in the country and has been a grand success in stimulating and inspiring the community through this national level symposium. Visit our Facebook page below to know more about it.</p>
              <a href="https://www.facebook.com/technopreneur.mec" target="_blank" rel="noopener noreferrer">Technopreneur facebook</a>
            </div>
            <div className="modal-container">
              <h5>Vision</h5>
              <p>To promote and enrich the entrepreneurial culture in MEC, strengthening and supporting innovative ideas using technology and mentorship for social and economic growth.</p>
            </div>
            <div className="modal-container">
              <h5>Mission</h5>
              <p>To Develop, Nurture and Sustain the utopian dream of preparing MECians to be leaders of tomorrow and driving the change for the future.</p>
            </div>
            <div className="modal-container">
              <h5>Objectives</h5>
              <ol>
                <li>To be a self sustainable Technology Business Incubator</li>
                <li>To organise Entrepreneurship Awareness Camps, Entrepreneurship Development Programmes, Faculty Development Programmes and Skill Development Programmes in the institution.</li>
                <li>To organize Business Plan Competitions every year.</li>
                <li>To guide and assist prospective entrepreneurs on various aspects such as preparing project reports, obtaining project approvals, loans and facilities from agencies of support system, information on technologies etc.</li>
                <li>To arrange interaction with entrepreneurs and create a mentorship scheme for student entrepreneurs.</li>
                <li>To inculcate a culture of innovation driven entrepreneurship.</li>
              </ol>
            </div>
            <div className="modal-container">
              <p style={{ color: "#BF2200" }}>KTU awards activity points for B.Tech students participating in IEDC, NSS and Sports. A student should gain 100 activity points at the end of 4 years of his/her study. Points that can be gained in IEDC activities, workshops, social innovations, internship in startup, Attended/ participated Exhibitions, project contest, prototype development, company registration, IPR, Start-up activity.</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <a href="https://discord.gg/Je6rGaT" target="_blank" rel="noopener noreferrer" className="btn waves-effect " style={{ 'color': '#BF2200', 'background-color': 'white', 'font-weight': '500' }}>
          <i className="material-icons right">arrow_forward</i>
							Join The Community
			</a>

      </div>
    </div>
  );
};

export default About;
