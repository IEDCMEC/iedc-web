import React, { Component } from "react";
import Wave from "react-wavify";
import BGImageStar from '../Assets/svgs/Vector.svg'
import BGImageGlobe from '../Assets/svgs/2.svg'
import ThereForYou from '../Assets/home/ThereForYou.svg'
import Rocket from '../Assets/svgs/Group 3.svg'
import '../css/intro.css'

class Intro extends Component {
    startups = [
        {
            id: 1,
            img: "startup1.png",
            description: "first startup",
        },
        {
            id: 2,
            img: "startup2.jpg",
            description: "second startup",
        },
    ];
    constructor() {
        super();

        this.state = {
            startupId: null,
        };
    }

    startupClickHandler = (startupid) => {
        this.setState({ startupId: startupid });
    };
    returnToStartups = () => {
        this.setState({ startupId: null });
    };
    render() {
        return (
            <div style={{ marginTop: "0", backgroundColor: "#BF2200" }}>
                <Wave
                    fill="#122B42"
                    paused={false}
                    options={{
                        height: 60,
                        amplitude: 50,
                        speed: 0.3,
                        points: 5,
                    }}
                />
                <section
                    className="about section z-depth-1"
                    id="startup_culture"
                    style={{
                        marginTop: -10,
                        "backgroundColor": "#122B42",
                        "backgroundImage": "",
                    }}
                >
                    <div className="contentAlign mobile-text" style={{ color: "white", textAlign: "center" }}>
                        {/* <img src={BGImageGlobe} className='responsive-img' style={{ marginBottom: '20px' }} alt="About us image" /> */}
                        <h3>The Startup Culture</h3><br />
                        <p style={{ color: "white" }}>
                        MEC is a community of tech-focused students who are supported and 
                        guided in their entrepreneurial pursuits. IEDCMEC hosts technically
                        stimulating workshops, talk sessions by accomplished entrepreneurs, 
                        design thinking workshops, exposure to business case studies, to 
                        enhance students' skills. We also promote a startup culture by 
                        giving counsel and direction along with technical support and platforms 
                        for entrepreneurial development.

                                    <br />
                            <br />
                            Our annual symposium, Technopreneur, attracts top minds in India
                            and has gained national attention over the years. Dr. K. Radhakrishnan, 
                            former ISRO chairman, Mr. Kris Gopakrishnan, founder and former chairman
                            of Infosys, etc to name a few from an elite legacy. Technopreneur has 
                            been a flagship event for MEC over the years and has lived up to the hype
                            whenever it was organized garnering national attention. This year marks
                            the 12th edition of Technopreneur.
                                </p>
                        {/* <div className="col s12 m6 offset-m1"> */}
                        <br />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.freepik.com/free-photos-vectors/business"
                        >
                            <img
                                src={Rocket}
                                alt="about"
                                className="responsive-img rocketSize"
                                id="startup_img"
                            />

                        </a>
                        {/* </div> */}
                    </div>
                </section>

                <div style={{ marginTop: "0", backgroundColor: "#122B42" }}>
                    <Wave
                        fill="white"
                        paused={false}
                        options={{
                            height: 60,
                            amplitude: 50,
                            speed: 0.3,
                            points: 5,
                        }}
                    />
                </div>

                <section
                    className="section"
                    id="about"
                    style={{ "backgroundColor": "white", "paddingBottom": "5%", marginTop: -10 }}
                >


                    <div className="contentAlign" style={{ color: "#BF2200", textAlign: "center" }}>
                        {/* <img src={BGImageGlobe} className='responsive-img' style={{ marginBottom: '20px' }} alt="About us image" /> */}
                        <h3>We are there for you</h3>
                        <br />
                        <img
                            src={ThereForYou}
                            alt="about"
                            className="responsive-img rocketSize"
                            id="startup_img"
                        /><br /><br />
                        <p style={{ color: "black" }}>
                            Have an idea? Don't know how to implement it? We'll help you
                            bring it to life. If you have a project or an idea in mind, we
                            will provide you with the tools required to make it into a
                            reality.
                                    <br />
                            <br />
                                    IEDC MEC currently acts as a pre-incubator, we support various
                                    projects that our students work on, provide them financial
                                    assistance and help them with ideation and prototype
                                    development. We also provide them with mentorship and support
                                    from industry experts through our distinguished pool of mentors
                                    consisting of xMECians and accomplished entrepreneurs to scale
                                    their projects into sustainable and successful startup ventures.
                                </p>
                        <br />

                    </div>

                </section>

                <div style={{ backgroundColor: "white" }}>
                    <Wave
                        fill="#BF2200"
                        paused={false}
                        options={{
                            height: 50,
                            amplitude: 60,
                            speed: 0.3,
                            points: 5,
                        }}
                    />
                </div>

                <section
                    style={{ "backgroundColor": "#BF2200", marginTop: -7 }}
                >
                    <div
                        style={{ textAlign: "center", paddingBottom: "50px" }}
                    >
                        <div>
                            <div className="col s12 m5" style={{ color: "white", paddingTop: "10vh" }}>
                                <h3 style={{ color : "white" }}>Incubation</h3>
                            </div>

                            <div className="container" style={{ marginTop: "50px" }}>
                                <div className="row">
                                    <div className="col s12 m5" style={{ color: "white" }}>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.freepik.com/free-photos-vectors/business"
                                        >
                                            <img
                                                src={require("../Assets/home/projects.svg")}
                                                alt="about"
                                                className="responsive-img"
                                                id="about_img"
                                                style={{pointerEvents:"none"}}
                                            />
                                        </a>
                                    </div>
                                    <div className="col s12 m6 offset-m1">
                                        <p style={{ color: "white", textAlign: "left" }}>
                                            Having an exciting idea in your mind and not having the means to fulfill it can be frustrating. Well, good news! Here’s a platform where you can work in collaboration with others on projects and turn your ideas into working prototypes.
                                            <br />
                                            <br />
                                            Bring us your ideas, and we'll help you unlock its true potential.
                                        </p>
                                        <br />
                                        <a href="https://github.com/IEDCMEC/projects/blob/main/README.md" target="_blank" className="btn waves-effect " style={{ 'color': '#BF2200', 'backgroundColor': 'white', 'fontWeight': '500' }}>
                                            <i className="material-icons right">arrow_forward</i>
							                Read More
			                            </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Intro;
