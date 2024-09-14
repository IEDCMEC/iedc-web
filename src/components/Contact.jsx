import React, { useState, useEffect } from "react";
import "../index.css";

const Contact = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted the form successfully");
    };

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const textareaStyle = {
        height: "10rem",
        color: "white",
        width: isSmallScreen ? "100%" : "25em", // Responsive max-width
    };

    return (
        <div id="top_margin" style={{ backgroundColor: "#122B42" }}>
            <section className="main_img center">
                <div
                    className="row"
                    style={{ marginBottom: "0px", backgroundColor: "#122B42", color: "white" }}
                    id="centre_mobile"
                >
                    <div className="col s12 m12 l12 margin_top_mobile" id="contact">
                        <div id="ourProductsAndFollowUS">
                            <div id="footerOurProducts">
                                <h4>Our Products</h4>
                                <div id="footerOurProductsItems">
                                    <a
                                        href="https://techno-event-management.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        <h6>EVENTSYNC</h6>
                                    </a>
                                    <a
                                        href="https://collab.iedcmec.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        <h6>IEDC MEC COLLAB</h6>
                                    </a>
                                    <a
                                        href="https://blog.iedcmec.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        <h6>IEDC MEC BLOG</h6>
                                    </a>
                                </div>
                            </div>
                            <div className="col s12 m12 l12" id="icons">
                                <h4 id="bottom_margin">Follow Us</h4>

                                <div id="icon_space">
                                    <a
                                        href="https://twitter.com/iedc_mec"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                        aria-label="twitter"
                                    >
                                        <i className="fab circle fa-twitter fa-2x" />
                                    </a>
                                    <a
                                        href="http://linkedin.com/company/iedcmec"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                        aria-label="linkedin"
                                    >
                                        <i className="fab circle fa-linkedin fa-2x" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/iedcmec/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                        aria-label="instagram"
                                    >
                                        <i className="fab circle fa-instagram fa-2x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="footerContact">
                            <h4>Contact</h4>
                            <div>
                                <div id="contactForm">
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label id="lname" htmlFor="name">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Enter your name"
                                                required
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                        <div>
                                            <label id="lemail" htmlFor="email">
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                required
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                        <div>
                                            <label id="lmessage" htmlFor="message">
                                                Message:
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Enter your message"
                                                required
                                                style={textareaStyle}
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button id="submitBtn" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <h6>
                                        Email: <a href="mailto:iedc@mec.ac.in">iedc@mec.ac.in</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
