import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "../index.css";

const Gallery = () => {
    useEffect(() => {
        const elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems);
    });

    return (
      <div className="gallery section" id="gallery">
        <div className="container center">
          <h3 className="text-darken-3 center-align" id="bottom_margin">
            Gallery
          </h3>
          <div className="row">
            <div className="col s12 m4" id="bottom_margin">
              <img
                style={{ "background-size": "cover", height: "50vh", margin: "auto" }}
                src={require("../Assets/gallery1.png")}
                alt=""
                className="materialboxed responsive-img mobile_space"
                id="curve_border"
              />
            </div>
            <div className="col s12 m4" id="bottom_margin">
              <img
                style={{ "background-size": "cover", height: "50vh", margin: "auto" }}
                src={require("../Assets/ache1.png")}
                alt=""
                className="materialboxed responsive-img mobile_space"
                id="curve_border"
              />
            </div>
            <div className="col s12 m4">
              <img
                style={{ "background-size": "cover", height: "50vh", margin: "auto" }}
                src={require("../Assets/ache2.png")}
                alt=""
                className="materialboxed responsive-img mobile_space"
                id="curve_border"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4" id="bottom_margin">
              <img
                style={{ "background-size": "cover", height: "50vh", margin: "auto" }}
                src={require("../Assets/ache3.png")}
                alt=""
                className="materialboxed responsive-img hidepic"
                id="curve_border"
              />
            </div>

            <div className="col s12 m4" id="bottom_margin">
              <img
                style={{ "background-size": "cover", height: "50vh", margin: "auto" }}
                src={require("../Assets/gallery1.png")}
                alt=""
                className="materialboxed responsive-img mobile_space hidepic"
                id="curve_border"
              />
            </div>
            <div className="col s12 m4" id="curve_border">
              <div
                style={{
                                height: "50vh",
                                width: "80%",
                                "text-align": "center",
                                "background-color": "#C33427",
                                color: "white",
                                "margin-top": "0",
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
      </div>
    );
};

export default Gallery;
