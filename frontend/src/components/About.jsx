import React, { useEffect } from "react";
import "../index.css";
import M from "materialize-css/dist/js/materialize.min.js";

const About = () => {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <section className="about section" id="about">
      <div className="container">
        <h3 className="text-darken-3 center-align" id="top_margin">
          About IEDC MEC
          </h3>
        <br />
        <div className="row">
          <div className="col s12 m5">
            <p style={{ color: "black", marginBottom: "3rem" }}>
              Founded in January in the year 2009 as Entrepreneurship Cell, MEC and revamped as IEDC MEC under the guidance of Kerala Startup Mission as a Govt. of Kerala initiative in 2015, the Innovation and Entrepreneurship Development Cell of Model Engineering college has constantly worked towards helping the community find an intersection between technology and entrepreneurship.
            <br /><br />
            We strongly believe that entrepreneurship is the key to unlock the nation’s true potential and therefore strive to promote the idea of job creation rather than job seeking. By consistently hosting a large number of inspiring and innovative events and through our flagship annual national level symposium- ‘Technopreneur’, IEDC MEC,from its humble beginnings is now one of the best functioning IEDCs in the state.
            <br /><br />
            IEDC MEC currently acts as a pre-incubator which helps in providing mentorship and support to the projects of our students and help to scale them into potential startup realities. We are funded by the Kerala Startup Mission(KSUM).
              </p>
            <button data-target="modal1" className="btn modal-trigger z-depth-0" style={{ backgroundColor: '#C33427', 'border-radius': "8px" }} >
              <i className="material-icons right">arrow_forward</i>Read More</button>

            <div id="modal1" className="modal black-text " style={{
              color: "grey",
              maxHeight: '85%',
              width: '85%',
              overflowY: 'hidden'
            }}>
              <div className="modal-content">
                <div
                  style={{
                    "border-style": "solid",
                    "border-color": "#f08080",
                    "border-radius": "15px",
                    padding: 15,
                    height: "75vh",
                    overflowY: 'scroll'
                  }}>

                  <h6 className='black-text'>Technopreneur</h6>
                  <p>
                    Technopreneur, the flagship event of IEDC MEC is the annual entrepreneurial and managerial symposium of MEC which weaves the perfect symphony of technology meeting entrepreneurship. Over the years it has attracted the best minds in the country and has been a grand success in stimulating and inspiring the community through this national level symposium.
                    Visit our Facebook page below to know more about it.
                 </p>
                  <a href="https://www.facebook.com/technopreneur.mec">Technopreneur Facebook</a>
                  <br />
                  <br />
                  <h6 className='black-text'>Vision</h6>
                  <p>
                    To promote and enrich the entrepreneurial culture in MEC, strengthening and supporting innovative ideas using technology and mentorship for social and economic growth.
                   </p>
                  <br />
                  <br />
                  <h6 className='black-text'>Mission</h6>
                  <p>
                    To Develop, Nurture and Sustain the utopian dream of preparing MECians to be leaders of tomorrow and driving the change for the future.</p>
                  <br />
                  <br />
                  <h6 className='black-text'>
                    Objectives
                    </h6>
                  <ol style={{ textAlign: 'left' }} className='center' >
                    <li>
                      <p>
                        To be a self sustainable Technology Business Incubator
                    </p>
                    </li>
                    <li>
                      <p>
                        To organise Entrepreneurship Awareness Camps,
                        Entrepreneurship Development Programmes, Faculty
                        Development Programmes and Skill Development Programmes
                        in the institution.
                    </p>
                    </li>
                    <li>
                      <p>
                        To organize Business Plan Competitions every year.
                      </p>
                    </li>
                    <li>
                      <p>
                        To guide and assist prospective entrepreneurs on various
                        aspects such as preparing project reports, obtaining
                        project approvals, loans and facilities from agencies of
                        support system, information on technologies etc.
                    </p>
                    </li>
                    <li>
                      <p>
                        To arrange interaction with entrepreneurs and create a
                        mentorship scheme for student entrepreneurs.
                    </p>
                    </li>
                    <li>
                      <p>
                        To inculcate a culture of innovation driven
                        entrepreneurship.
                    </p>
                    </li>
                  </ol>
                  <p className='red-text text-darken-2' >
                    KTU awards activity points for B.Tech students participating in IEDC, NSS and Sports.
                    A student should gain 100 activity points at the end of 4 years of his/her study.
                    Points that can be gained in IEDC activities, workshops, social innovations,  internship in startup,
                    Attended/ participated Exhibitions, project contest, prototype development,
                    company registration, IPR, Start-up activity.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6 offset-m1">
            <br />
            <img
              src={require("../Assets/about.png")}
              alt="about"
              className="responsive-img"
              id="about_img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
