import React, { Component } from "react";
import "../index.css";
import IEDC from "../Assets/logo.png";
import "materialize-css/dist/css/materialize.min.css";
// import axios from 'axios';

class Home extends Component{
  constructor() {
    super();
    this.state = {
      announcements: []
    }
  }

  componentDidMount() {
    // axios.get("http://127.0.0.1:8000/api/announcements/")
    //   .then(res => this.setState({ announcement: res.data }))

    fetch('https://raw.githubusercontent.com/IEDCMEC/data/master/data.json')
      .then(response => response.json())
      .then(data => this.setState({announcements: data.announcements}));
  }

  render(){
    const display_announcement = this.state.announcements.map(announcement => {
      return (
        <div style={{"text-align": "center"}}>
          <h6><b>{announcement.title}</b></h6>
          <p style={{fontSize: "80%"}}>{announcement.description}</p>
        </div>
      )
    })
    return (
      <div id="bottom_margin">
        <section
          className="home main_img"
          id="box_curve_bottom"
          style={{}}
        >
          <div className="container " id="home" style={{ color: "rgb(223, 218, 218)" }}>
            <div className="row">
              <div className="col s12 m6">
                <div
                  className="iedc_img"
                >
                  <img
                    src={IEDC}
                    alt="Logo"
                    className="responsive-img"
                  />
                </div>
              </div>
              <a target="_blank" href='https://www.freepik.es/fotos-vectores-gratis/fondo'></a>
              <div className="col s24 m3 offset-m2">
                <br />
                <br />
                <h3
                  id="center_align"
                  className="announcement_header"
                  style={{ color: "#C33427" }}
                >
                  Announcements
                  </h3>
                  <br/>
                <div className="announcement-box">
                  <div className="col s8 m6" id="announcements_card">
                    <div className="card" id="curve_border">
                      <div className="card-content" style={{ color: "black", maxHeight:"100%" }}>
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
