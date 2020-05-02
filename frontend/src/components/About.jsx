import React from "react";
import "../index.css";
import Popup from "reactjs-popup";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h3 className="text-darken-3 center-align" id="top_margin">
          About Us
          </h3>
        <br />
        <div className="row">
          <div className="col s12 m5">
            <h5>What is IEDC?</h5>
            <p style={{ color: "black" }}>
              The concept of Innovation and Entrepreneurship Development Cell (IEDC)
              was formulated to promote innovation and entrepreneurial culture in
              educational institutions and to develop institutional mechanism to
              foster techno-entrepreneurship for generation of wealth and employment
              by persons. The IEDCs are established in academic institutions across
              Kerala having requisite expertise and infrastructure.
                <br />
              <br />
                Kerala Startup Mission has taken this initiative of the Govt of Kerala
                to the academic institutions in order to create awareness, exposure and
                skills among the students and to enable and promote an environment to
                create entrepreneurial ventures by developing innovative products of
                social relevance.
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
                    The Innovation and Entrepreneurship Development Centres (IEDC)
                    are platforms set up in Engineering, Management, Arts & Science
                    Colleges and Polytechnics with an aim to provide students an
                    opportunity to experiment and innovate. Kerala Startup Mission
                    has set up IEDCs in 226 institutions across the State which
                    provide avenues for creative students to learn, collaborate and
                    transform their innovative ideas into prototypes of viable
                    products and services.
                    <br />
                  <br />
                  <h6 style={{ color: "black" }}>Vision</h6>
                    The vision of IEDC is to "promote and enrich entrepreneurial
                    culture in the state by strengthening and supporting the
                    innovative ideas using technology and mentorship for the social
                    and economical growth of the Nation".
                    <br />
                  <br />
                  <h6 style={{ color: "black" }}>Mission</h6>
                    The mission of the IEDC is to "develop institutional mechanism
                    to create entrepreneurial culture in academic institutions to
                    foster growth of innovation and entrepreneurship amongst the
                    faculty and students in the state".
                    <br />
                  <br />
                  <h6 style={{ color: "black" }}>
                    The main objectives of IEDC are
                    </h6>
                  <ol>
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
