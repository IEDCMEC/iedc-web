import React, { useState, useEffect } from "react";
import "../index.css";
import accIcon from "../Assets/person_.png";
import mailIcon from "../Assets/mail_.png";
import messageIcon from "../Assets/chat_.png";

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

    
    const currentYear = new Date().getFullYear(); 

    const textareaStyle = {
        height: "10rem",
        color: "white",
        width: isSmallScreen ? "100%" : "25em", // Responsive max-width
        border: "1px solid #1c466de1",
        padding: " 1rem 0 0.1rem 3rem",
        borderRadius: "0.7rem",
        backgroundColor: "#1c466de1",
        fontFamily: "Poppins",
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
                                        href="https://github.com/IEDCMEC/techno-event-management"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        <h6>EventSync</h6>
                                    </a>
                                    <a
                                        href="https://collab.iedcmec.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        <h6>IEDC Collab</h6>
                                    </a>
                                    <a
                                        href="https://blog.iedcmec.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white" }}
                                    >
                                        <h6>IEDC Blog</h6>
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
                            <h4>Contact Us</h4>
                            <div>
                                <div id="contactForm">
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ position: "relative" }}>
                                            <label
                                                id="lname"
                                                htmlFor="name"
                                                style={{
                                                    color: "white",
                                                    fontFamily: "Poppins",
                                                }}
                                            >
                                                Name:
                                            </label>
                                            <img
                                                src={accIcon}
                                                alt="accIcon"
                                                style={{
                                                    position: "absolute",
                                                    left: "8px",
                                                    top: "32px",
                                                    width: "25px",
                                                }}
                                            />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Enter your name"
                                                required
                                                style={{
                                                    color: "white",
                                                    border: "1px solid #1c466de1",
                                                    padding: " 0.1rem 0 0.1rem 3rem",
                                                    borderRadius: "0.7rem",
                                                    backgroundColor: "#1c466de1",
                                                    maxWidth: "22rem",
                                                    fontFamily: "Poppins",
                                                }}
                                            />
                                        </div>
                                        <div style={{ position: "relative" }}>
                                            <label
                                                id="lemail"
                                                htmlFor="email"
                                                style={{ color: "white", fontFamily: "Poppins" }}
                                            >
                                                Email:
                                            </label>
                                            <img
                                                src={mailIcon}
                                                alt="mailIcon"
                                                style={{
                                                    position: "absolute",
                                                    left: "8px",
                                                    top: "33px",
                                                    width: "25px",
                                                }}
                                            />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                required
                                                style={{
                                                    color: "white",
                                                    border: "1px solid #1c466de1",
                                                    padding: " 0.1rem 0 0.1rem 3rem",
                                                    borderRadius: "0.7rem",
                                                    backgroundColor: "#1c466de1",
                                                    maxWidth: "22rem",
                                                    fontFamily: "Poppins",
                                                }}
                                            />
                                        </div>
                                        <div style={{ position: "relative" }}>
                                            <label
                                                id="lmessage"
                                                htmlFor="message"
                                                style={{ color: "white", fontFamily: "Poppins" }}
                                            >
                                                Message:
                                            </label>
                                            <img
                                                src={messageIcon}
                                                alt="messageIcon"
                                                style={{
                                                    position: "absolute",
                                                    left: "10px",
                                                    top: "32px",
                                                    width: "25px",
                                                }}
                                            />
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Enter your message"
                                                required
                                                style={textareaStyle}
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button
                                                id="submitBtn"
                                                type="submit"
                                                style={{
                                                    color: "white",
                                                    fontWeight: "600",
                                                    width: "fit-content",
                                                    padding: "0.5rem 2.2rem",
                                                }}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <h6>
                                        Email:{" "}
                                        <a href="mailto:iedc@mec.ac.in" style={{ color: "white" }}>
                                            iedc@mec.ac.in
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="Copyright"
                    style={{
                        backgroundColor: "rgb(18, 43, 66);",
                        paddingBottom: "1rem",
                    }}
                >
                    <h4 id="CopyrightText">Copyright © {currentYear} IEDC MEC</h4>
                </div>
            </section>
        </div>
    );
};

export default Contact;
