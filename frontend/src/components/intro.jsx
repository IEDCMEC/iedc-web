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
                                    Hello
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

                                <h3>We are there to help</h3>
                                <p style={{ color: "black" }}>
                                    Hi, we are there to help.
                                    We can help you in many ways.
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
                                    COMING SOON
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