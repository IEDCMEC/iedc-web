import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import Wave from "react-wavify";
import "../index.css";

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
            <div style={{ marginTop: "10px" }}>
                <Wave
                    fill="#DF483B"
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
                        "background-color": "#DF483B",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m5" style={{ color: "white" }}>
                                <h3>The Startup Culture</h3>
                                <p style={{ color: "white" }}>
                                    MEC has a wide network of students passionate about technology
                                    and learning and we nurture a system of guidance and support for
                                    those intending to bring their ideas into fruition. We
                                    consistently host technically stimulating workshops, talk
                                    sessions by accomplished entrepreneurs, design thinking
                                    workshops, exposure to business case studies, to hone the skill
                                    sets of our students as we are committed to the utopian dream of
                                    seeing each MECian live up to his/her true capabilities. We
                                    promote our startup culture by giving counsel and direction
                                    along with technical support and provide platforms to develop
                                    their entrepreneurial skills.
                                    <br />
                                    <br />
                                    Through its flagship annual symposium- ‘Technopreneur’, we have
                                    managed to scale our activities on a national level as well,
                                    having attracted the best minds in India for the symposium over
                                    the years. Dr. K. Radhakrishnan, former ISRO chairman, Mr. Kris
                                    Gopakrishnan, founder and former chairman of Infosys, etc to
                                    name a few from an elite legacy. Technopreneur has been a
                                    flagship event for MEC over the years and has lived up to the
                                    hype whenever it was organized garnering national attention.
                                    This year will be the 12th edition of Technopreneur.
                                </p>
                            </div>
                            <div className="col s12 m6 offset-m1">
                                <br />
                                <a
                                    target="_blank"
                                    href="https://www.freepik.com/free-photos-vectors/business"
                                >
                                    <img
                                        src={require("../Assets/startup_culture.jpg")}
                                        alt="about"
                                        className="responsive-img"
                                        id="startup_img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="section"
                    id="about"
                    style={{ "background-color": "#fafafa", "padding-bottom": "5%" }}
                >
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col s12 m5" style={{ color: "white" }}>
                                <a
                                    target="_blank"
                                    href="https://www.freepik.com/free-photos-vectors/business"
                                >
                                    <img
                                        src={require("../Assets/help.jpg")}
                                        alt="about"
                                        className="responsive-img"
                                        id="about_img"
                                    />
                                </a>
                            </div>
                            <div className="col s12 m6 offset-m1">
                                <h3>We are there for you</h3>
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
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="projects section z-depth-4"
                    style={{ "background-color": "#DF483B" }}
                >
                    <div
                        className="container"
                        style={{ marginTop: "50px", textAlign: "center", marginBottom: "50px" }}
                    >
                        <div>
                            <div className="col s12 m5" style={{ color: "white" }}>
                                <h3>Meet our startups</h3>
                            </div>

                            {this.state.startupId ? (
                                this.state.startupId === 1 ? (
                                    <div className="container">
                                        <div className="row" style={{ margin: "3rem" }}>
                                            <div className="col s12 m5">
                                                <img
                                                    src={require("../Assets/startup1.png")}
                                                    alt="startup1"
                                                    className="responsive-img"
                                                    style={{ width: "180px", height: "180px" }}
                                                />
                                            </div>
                                            <div
                                                className="col s12 m6 offset-m1"
                                                style={{ color: "white" }}
                                            >
                                                <h6><b>DevQuest</b></h6>
                                                DevQuest bridges the gap between the Indian tech hiring
                                                scenario and the Indian technical education system
                                                by imbibing a specially curated evaluation process
                                                that assesses practical knowledge and technical
                                                skills through our gamified upskilling and hackathon
                                                platform.
                                            </div>
                                        </div>
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                color: "white",
                                                fontSize: "2rem",
                                            }}
                                            onClick={this.returnToStartups}
                                            className="material-icons"
                                        >
                                            arrow_back
                                        </span>
                                    </div>
                                ) : (
                                    <div className="container">
                                        <div className="row" style={{ margin: "3rem" }}>
                                            <div className="col s12 m5">
                                                <img
                                                    src={require("../Assets/startup2.jpg")}
                                                    alt="startup2"
                                                    className="responsive-img"
                                                    style={{
                                                        width: "180px",
                                                        height: "180px",
                                                        marginTop: "2rem",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className="col s12 m6 offset-m1"
                                                style={{ color: "white" }}
                                            >
                                                <h6><b>lyfboat</b></h6> LifeBoat is a platform that will
                                                change the way mental health care is seen in India.
                                                We collaborate with similar organisations and
                                                practising health care workers to offer free as well
                                                as paid services that revolve around providing an
                                                inclusive and hassle free user experience. We've
                                                paid careful attention to building a beautiful and
                                                intuitive interface for our mobile application,
                                                making LifeBoat both useful and easy to get around.
                                            </div>
                                        </div>
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                color: "white",
                                                fontSize: "2rem",
                                            }}
                                            onClick={this.returnToStartups}
                                            className="material-icons "
                                        >
                                            arrow_back
                                        </span>
                                    </div>
                                )
                            ) : (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                    }}
                                >
                                    {this.startups.map((startup) => (
                                        <img
                                            onClick={() => this.startupClickHandler(startup.id)}
                                            src={require(`../Assets/${startup.img}`)}
                                            alt="startups"
                                            id="startup.id"
                                            className="responsive-img"
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                marginLeft: "30px",
                                                marginRight: "30px",
                                                cursor: "pointer",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Intro;
