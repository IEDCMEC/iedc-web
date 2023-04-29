import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./AchievementsPopup";
import "../css/popup_style.css";

const Achievements = () => {
    const [announcement, setAnnouncement] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/imageupload/")
            .then((res) => setAnnouncement(res.data));
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const displayAnnouncement = announcement.slice(0, 3).map((announcements) => {
        return (
            <div>
                <div className="col s12 m3">
                    <div className="card card_design card_height" id="curve_border">
                        <div className="card-image">
                            <img
                                src={announcements.image}
                                alt="1"
                                className="responsive-img"
                                id="curve_border_top"
                            />
                        </div>
                        <div className="card-content">
                            <p>{announcements.title}</p>
                        </div>
                        <div className="card-action">
                            <a href="#" style={{ color: "#BF2200" }}>
                                More Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section className="section" id="achievements">
            <div className="container" id="section_spacing">
                <h3 className="text-darken-3 center-align" id="bottom_margin">
                    Achievements
                </h3>
                <div className="row ">
                    {displayAnnouncement}
                    <div
                        className="col s12 m3 valign-wrapper"
                        id="curve_border"
                        onClick={togglePopup}
                    >
                        <div
                            style={{
                                textAlign: "center",
                                backgroundColor: "#BF2200",
                                color: "white",
                                margin: "auto",
                            }}
                            className="card-panel more_height"
                            id="curve_border"
                        >
                            <i
                                className="material-icons right"
                                style={{ marginRight: "45%", marginTop: "35%" }}
                            >
                                arrow_forward
                            </i>
                            <p style={{ marginRight: "auto", marginTop: "55%" }}>More</p>
                        </div>
                    </div>
                    {showPopup ? (
                        <Popup text="Click 'Close Button' to hide popup" closePopup={togglePopup} />
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
