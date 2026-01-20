import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/popup_style.css";

const Popup = ({ closePopup }) => {
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/imageupload/")
            .then((res) => setAnnouncement(res.data));
    }, []);

    const displayAnnouncement = announcement.map((announcements) => {
        return (
            <div>
                <div className="col s12 m3">
                    <div className="card card_design" id="curve_border">
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
        <div className="popup" style={{ zIndex: "100" }}>
            <div className="popup_inner">
                <button onClick={closePopup} type="close" style={{ right: "5%", top: "15%", position: "fixed" }}>
                    <i className="material-icons" style={{ float: "none" }}>
                        close
                    </i>
                </button>
                <div className="row ">{displayAnnouncement}</div>
            </div>
        </div>
    );
};

export default Popup;
