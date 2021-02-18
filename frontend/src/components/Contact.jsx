import React, { Component } from "react";
import "../index.css";

class Contact extends Component{

  render(){
    return (
      <div id="top_margin" style={{ "background-color": "#122B42"}}>
        <section className="main_img center">
            <div className="row" style={{marginBottom: "0px", backgroundColor: "#122B42", color: "white"}} id="centre_mobile">
              <div
                className="col s12 m12 l12 margin_top_mobile"
                id="contact"
              >
                <h4 id="bottom_margin">
                  Follow Us
                </h4>
                <div className="col s12 m12 l12" id="icons">
                  <div>
                    <a href="https://twitter.com/iedc_mec" target="_blank" style={{ color: "white" }} id="icon_space">
                      <i className="fab circle fa-twitter fa-2x" />
                    </a>
                    <a href="http://linkedin.com/company/iedcmec" target="_blank" style={{ color: "white" }} id="icon_space">
                      <i className="fab circle fa-linkedin fa-2x" />
                    </a>
                    <a href="https://www.instagram.com/iedcmec/" target="_blank" style={{ color: "white" }} id="icon_space">
                      <i className="fab circle fa-instagram fa-2x" />
                    </a>
                  <a href="https://www.facebook.com/IEDCMEC/" target="_blank" style={{ color: "white" }} id="icon_space">
                      <i className="fab circle fa-facebook fa-2x" />
                    </a>
                  </div>
                  </div>
                  <div style={{paddingTop:"3rem", paddingBottom:"3rem", paddingLeft:"5px"}}>
                    <h4>Contact</h4>
                    <h6>iedc@mec.ac.in</h6>
                  </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
