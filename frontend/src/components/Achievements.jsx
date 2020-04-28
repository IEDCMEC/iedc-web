import React from "react";

const Achievements = () => {
    return (
      <section className="section" id='achievements'>
        <div className="container" id="section_spacing">
          <h3 className="text-darken-3 center-align" id="bottom_margin">
            Achievements
          </h3>
          <div className="row ">
            <div className="col s12 m3">
              <div className="card card_design" id="curve_border">
                <div className="card-image">
                  {/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
                  <img
                    src={require("../Assets/ache1.png")}
                    alt="1"
                    className="responsive-img"
                    id="curve_border_top"
                  />
                </div>
                <div className="card-content">
                  <p>Pro Hack</p>
                </div>
                <div className="card-action">
                  <a href="#" style={{ color: "#C33427" }}>
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col s12 m3">
              <div className="card card_design" id="curve_border">
                <div className="card-image">
                  {/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
                  <img
                    src={require("../Assets/ache2.png")}
                    alt="1"
                    className="responsive-img"
                    id="curve_border_top"
                  />
                </div>
                <div className="card-content">
                  <p>Flutter Workshop</p>
                </div>
                <div className="card-action">
                  <a href="#" style={{ color: "#C33427" }}>
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col s8 m3">
              <div className="card card_design" id="curve_border">
                <div className="card-image">
                  {/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
                  <img
                    src={require("../Assets/ache3.png")}
                    alt="1"
                    className="responsive-img"
                    id="curve_border_top"
                  />
                </div>
                <div className="card-content">
                  <p>Toast Masters</p>
                </div>
                <div className="card-action">
                  <a href="#" style={{ color: "#C33427" }}>
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col s4 m3 valign-wrapper" id="curve_border">
              <div
                style={{
                                height: "55vh",
                                width: "100%",
                                "text-align": "center",
                                "background-color": "#C33427",
                                color: "white",
                            }}
                className="card-panel waves-effect"
                id="curve_border"
              >
                <i
                  className="material-icons right"
                  style={{ "margin-right": "45%", "margin-top": "35%" }}
                >
                  arrow_forward
                </i>
                <p style={{ "margin-right": "auto", "margin-top": "55%" }}>More</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Achievements;
