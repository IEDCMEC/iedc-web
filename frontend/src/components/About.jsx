import React from "react";
import "../index.css";
import Popup from "reactjs-popup";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h3 className="text-darken-3 center-align" id="top_margin">
          About IEDC MEC
          </h3>
        <br />
        <div className="row">
          <div className="col s12 m5">
            <p style={{ color: "black", marginBottom:"3rem" }}>
            Founded in January in the year 2009 as Entrepreneurship Cell, MEC and revamped as IEDC MEC under the guidance of Kerala Startup Mission as a Govt. of Kerala initiative in 2015, the Innovation and Entrepreneurship Development Cell of Model Engineering college has constantly worked towards helping the community find an intersection between technology and entrepreneurship.
            <br /><br />
            We strongly believe that entrepreneurship is the key to unlock the nation’s true potential and therefore strive to promote the idea of job creation rather than job seeking. By consistently hosting a large number of inspiring and innovative events and through our flagship annual national level symposium- ‘Technopreneur’, IEDC MEC,from its humble beginnings is now one of the best functioning IEDCs in the state.
            <br /><br />
            IEDC MEC currently acts as a pre-incubator which helps in providing mentorship and support to the projects of our students and help to scale them into potential startup realities. We are funded by the Kerala Startup Mission(KSUM).
              </p>

            <Popup
              trigger={(
                <a
                  className="btn waves-effect"
                  style={{ "background-color": "#C33427", "z-index":'0' }}
                >
                  <i className="material-icons right">arrow_forward</i>
                    Read More
                </a>
              )}
              modal
              closeOnDocumentClick
              style={{ "background-color": "red" }}
            >
              <div
                style={{
                  "overflow-y": "scroll",
                  "border-style": "solid",
                  "border-color": "#f08080",
                  "border-radius": "15px",
                  padding: "25px",
                  margin: "10px",
                  height: "500px",
                }}
              >
                <p className="pop-up" style={{ color: "grey" }}>
                  {" "}
                  <h6 style={{ color: "black" }}>Technopreneur</h6>
                  Technopreneur, the flagship event of IEDC MEC is the annual entrepreneurial and managerial symposium of MEC which weaves the perfect symphony of technology meeting entrepreneurship. Over the years it has attracted the best minds in the country and has been a grand success in stimulating and inspiring the community through this national level symposium.
Visit our Facebook page below to know more about it.
https://www.facebook.com/technopreneur.mec
                    <br />
                  <br />
                  <h6 style={{ color: "black" }}>Vision</h6>
                  To promote and enrich the entrepreneurial culture in MEC, strengthening and supporting innovative ideas using technology and mentorship for social and economic growth.
                    <br />
                  <br />
                  <h6 style={{ color: "black" }}>Mission</h6>
                  To Develop, Nurture and Sustain the utopian dream of preparing MECians to be leaders of tomorrow and driving the change for the future.
                    <br />
                  <br />
                  <h6 style={{ color: "black" }}>
                  Objectives
                    </h6>
                  <ol>
                    <li>
                    To be a self sustainable Technology Business Incubator
                    </li>
                    <li>
                      To organise Entrepreneurship Awareness Camps,
                      Entrepreneurship Development Programmes, Faculty
                      Development Programmes and Skill Development Programmes
                      in the institution.{" "}
                    </li>
                    <li>To organize Business Plan Competitions every year.</li>
                    <li>
                      To guide and assist prospective entrepreneurs on various
                      aspects such as preparing project reports, obtaining
                      project approvals, loans and facilities from agencies of
                      support system, information on technologies etc.
                                        </li>
                    <li>
                      To arrange interaction with entrepreneurs and create a
                      mentorship scheme for student entrepreneurs.
                                        </li>
                    <li>
                      To inculcate a culture of innovation driven
                      entrepreneurship.
                                        </li>
                  </ol>
                </p>
              </div>
            </Popup>
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
