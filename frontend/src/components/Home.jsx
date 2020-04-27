import React from "react";
import "../index.css";
import MainSvg from "../Assets/head.png";
import IEDC from "../Assets/logo.svg";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div id=" bottom_margin">
      <section
        className="home main_img"
        id="box_curve_bottom"
        style={{ "background-color": "white", "background-image": `url(${MainSvg})` }}
      >
        <Navbar />

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
                        > Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. <br />
                        <br />
                            > Eligendi eius veritatis aut quidem corporis
                            rem ut pariatur harum quas nulla, nihil officiis
                            voluptates tempora, libero aliquid dolorum rerum
                            exercitationem? Repellendus?{" "}
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
};

export default Home;
