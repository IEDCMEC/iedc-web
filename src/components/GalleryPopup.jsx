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
                <div className="col s12 m4" id="bottom_margin">
                    <div className="card-image">
                        <img
                            style={{ backgroundSize: "cover", margin: "auto" }}
                            src={announcements.image}
                            alt=""
                            className="responsive-img mobile_space"
                            id="curve_border"
                        />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="popup" style={{ zIndex: "100" }}>
            <div className="popup_inner">
                <button onClick={closePopup} style={{ right: "5%", top: "15%", position: "fixed" }}>
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
