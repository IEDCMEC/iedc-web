import React, { Component } from "react";
import "./Catalyst.styles.css";

class Catalyst extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
        };
    }

    render() {
        return (
            <div className="catalyst-card">
                <div className="catalyst-image"></div>

                <div className="catalyst-content">
                    <div className="catalyst-headings">
                        <div className="catalyst-heading1">CATALYST 2021</div>
                        <div className="catalyst-heading2">
                            <span style={{ color: "white" }}>Chief editor</span>
                            <span style={{ fontWeight: "500" }}> Suvarna Sivadas</span>
                        </div>
                    </div>

                    <div className="catalyst-buttons">
                        <div className="catalyst-button">READ ONLINE</div>
                        <div className="catalyst-button">DOWNLOAD</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalyst;
