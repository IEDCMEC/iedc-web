import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Wave from 'react-wavify'
import "../index.css";

class Intro extends Component {
    render() {
        return (
            <div style={{"marginTop": "10px"}}>
                <Wave fill="#DF483B"
                    paused={false}
                    options={{
                        height: 60,
                        amplitude: 50,
                        speed: 0.30,
                        points: 5
                    }}
                />
                <section className="about section z-depth-1" id="startup_culture" style={{
                    "marginTop": -10, 'background-color': "#DF483B"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m5" style={{"color": "white"}}>
                                <h3>The Startup Culture</h3>
                                <p style={{ color: "white" }}>
                                MEC has a wide network of students passionate about technology and learning and we nurture a system of guidance and support for those intending to bring their ideas into fruition. We consistently host technically stimulating workshops, talk sessions by accomplished entrepreneurs, design thinking workshops, exposure to business case studies, to hone the skill sets of our students as we are committed to the utopian dream of seeing each MECian live up to his/her true capabilities. We promote our startup culture by giving counsel and direction along with technical support and provide platforms to develop their entrepreneurial skills.
                                <br/><br/>
                                Through its flagship annual symposium- ‘Technopreneur’, we have managed to scale our activities on a national level as well, having attracted the best minds in India for the symposium over the years. Dr. K. Radhakrishnan, former ISRO chairman, Mr. Kris Gopakrishnan, founder and former chairman of Infosys, etc to name a few from an elite legacy. Technopreneur has been a flagship event for MEC over the years and has lived up to the hype whenever it was organized garnering national attention. This year will be the 12th edition of Technopreneur.

                                </p>
                        </div>
                        <div className="col s12 m6 offset-m1">
                            <br />
                            <img
                                src={require("../Assets/startup_culture.jpg")}
                                alt="about"
                                className="responsive-img"
                                id="startup_img"
                            />
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="about" style={{ "background-color": "#fafafa", "padding-bottom": "5%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m5" style={{ "color": "white" }}>
                                <img
                                    src={require("../Assets/help.jpg")}
                                    alt="about"
                                    className="responsive-img"
                                    id="about_img"
                                />
                                </div>
                                <div className="col s12 m6 offset-m1">
                                    <br />

                                <h3>We are there for you</h3>
                                <p style={{ color: "black" }}>
                                Have an idea? Don't know how to implement it? We'll help you bring it to life.
                                If you have a project or an idea in mind, we will provide you with the tools required to make it into a reality. 
                                <br/><br/>
                                IEDC MEC currently acts as a pre-incubator, we support various projects that our students work on, provide them financial assistance and help them with ideation and prototype development. We also provide them with mentorship and support from industry experts through our distinguished pool of mentors consisting of xMECians and accomplished entrepreneurs to scale their projects into sustainable and successful startup ventures. 
                                </p>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="projects section z-depth-4" style={{ "background-color": "#DF483B"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m5" style={{ "color": "white" }}>
                                <h3>Projects</h3>
                                <p style={{ color: "white" }}>
                                Coming soon!
                                <br/><br/>
                                Having an exciting idea in your mind and not having the means to fulfill it can be frustrating. Well, good news! Here’s a platform where you can work in collaboration with others on projects and turn your ideas into working prototypes.
                                <br/><br/>
                                Bring us your ideas, and we'll help you unlock its true potential.
                                </p>
                            </div>
                            <div className="col s12 m6 offset-m1">
                                <br />
                                <img
                                    src={require("../Assets/help.svg")}
                                    alt="about"
                                    className="responsive-img"
                                    id="about_img"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Intro;