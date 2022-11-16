import React, { useState } from "react";
import Cards from "./Cards";
import "../../css/announcements.css";
export default function Announcements(props) {
    const [boolCheck, setBoolCheck] = useState(false);
    var viewport_width = window.innerWidth;
    return (
        <div
            key={props.id}
            className=" announcement-box "
            style={{
                padding: viewport_width < 600 ? "0.4rem 1.5rem" : "1rem 1.5rem",
                margin: viewport_width < 600 ? "1.5rem 0" : null,
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 className="left-align">{props.title}</h5>
                {
                    <button
                        id="announcement_dropdown_icon"
                        style={{
                            transform: boolCheck ? "rotate(180deg)" : "none",
                        }}
                        onClick={() => setBoolCheck(!boolCheck)}
                    >
                        <i className="medium material-icons">keyboard_arrow_down</i>
                    </button>
                }
            </div>
            <div>{boolCheck ? <Cards summary={props.summary} link={props.link} /> : null}</div>
        </div>
    );
}
