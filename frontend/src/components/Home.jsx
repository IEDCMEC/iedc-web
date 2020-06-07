import React, { Component } from "react";
import "../index.css";
import MainSvg from "../Assets/head.png";
import IEDC from "../Assets/logo.svg";
import "materialize-css/dist/css/materialize.min.css";
// import axios from 'axios';

class Home extends Component{
  constructor() {
    super();
    this.state = {
      announcement: []
    }
  }

  componentDidMount() {
    // axios.get("http://127.0.0.1:8000/api/announcements/")
    //   .then(res => this.setState({ announcement: res.data }))

    fetch('https://raw.githubusercontent.com/IEDCMEC/data/master/data.json')
      .then(response => response.json())
      .then(data => this.setState({announcement: data.announcements}));
  }

  render(){
    const display_announcement = this.state.announcement.map(announcements => {
      return (
        <div>
          <p>> {announcements.title}</p>
          <p>{announcements.description}</p>
        </div>
      )
    })
    return (
      <div id=" bottom_margin">
        <section
          className="home main_img"
          id="box_curve_bottom"
          style={{ "background-color": "white", "background-image": `url(${MainSvg})` }}
        >
          <div className="container" id="home" style={{ color: "rgb(223, 218, 218)" }}>
            <div className="row">
              <div className="col s12 m6">
                <div
                  className="iedc_img"
                  style={{ "background-image": `url(${IEDC})`, height: "15vh" }}
                />
              </div>

              <div className="col s12 m5 offset-m1">
                <h4
                  id="center_align"
                  className="announcement_header"
                  style={{ color: "#C33427" }}
                >
                  Announcements
                  </h4>
                <div className="announcement-box">
                  <div className="col s6 m3" id="announcements_card">
                    <div className="card" id="curve_border">
                      <div className="card-content" style={{ color: "black" }}>
                        <p>
                          {display_announcement}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
