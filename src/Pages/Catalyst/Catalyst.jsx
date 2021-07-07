import React, { Component } from "react";
import "./Catalyst.styles.css";
import Catalyst2021 from "../../Assets/catalyst2021.jpg";
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
                    <img src={Catalyst2021 } className="catalyst-image"/>

                <div className="catalyst-content">
                    <div className="catalyst-headings">
                        <div className="catalyst-heading1">CATALYST 2021</div>
                        <div className="catalyst-heading2">
                            <span style={{ color: "grey" }}>Chief editor</span>
                            <span style={{ fontWeight: "500" }}> Suvarna Sivadas</span>
                        </div>
                    </div>

                    <div className="catalyst-buttons">
                        <div className="catalyst-button">
                            <a href="https://issuu.com/iedcmec/docs/catalyst_2021_min_" target="_blank" rel="noopener noreferrer">
                                READ ONLINE
                            </a>
                        </div>
                        <div className="catalyst-button">
                            <a href="https://drive.google.com/file/d/1B0W1ni6bTOPspthYkTZsTovY6M7doK1y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                DOWNLOAD
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalyst;
