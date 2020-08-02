import React, { Component } from "react";
import "../index.css";
import axios from 'axios';

class Contact extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = this.state;
    axios.post('http://127.0.0.1:8000/api/contactform/', { name, phone, email, message });
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      name: '',
      phone:'',
      email:'',
      message:'',
    })
    alert('Thank you :)');
  }

  render(){
    const { name, phone, email, message } = this.state;
    return (
      <div id="top_margin" style={{ "background-color": "rgb(223, 72, 59)"}}>
        <section id="box_curve_top">
            <div className="row" style={{marginBottom: "0px"}} id="centre_mobile">
              <div
                className="col s12 m3 l12 margin_top_mobile"
                id="contact"
              >
                <h4 id="bottom_margin">
                  Follow Us
                </h4>
                <div className="col s12 m3 l12" id="icons">
                  <div>
                    <a href="https://twitter.com/iedc_mec" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-twitter fa-2x" />
                    </a>
                    <a href="http://linkedin.com/company/iedcmec" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-linkedin fa-2x" />
                    </a>
                    <a href="https://www.instagram.com/iedcmec/" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-instagram fa-2x" />
                    </a>
                  </div>
                  </div>
                  <div style={{marginTop:"6rem", marginBottom:"3rem", marginLeft:"5px"}}>
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

{/* <div id="top_margin" style={{ "background-color": "rgb(223, 72, 59)" }}>
  <section id="box_curve_top">
    <div className="row" style={{ marginBottom: "0px" }} id="centre_mobile">
      <div
        className="col s12 m3 l12 margin_top_mobile"
        id="contact"
      >
        <h4 id="bottom_margin">
          Follow Us
                </h4>
        <div className="row s12 m3 l12">
          <div>
            <a href="https://twitter.com/iedc_mec" style={{ color: "#C33427" }} id="icon_space">
              <i className="fab circle fa-twitter fa-2x" />
            </a>
            <a href="http://linkedin.com/company/iedcmec" style={{ color: "#C33427" }} id="icon_space">
              <i className="fab circle fa-linkedin fa-2x" />
            </a>
            <a href="https://www.instagram.com/iedcmec/" style={{ color: "#C33427" }} id="icon_space">
              <i className="fab circle fa-instagram fa-2x" />
            </a>
          </div>
        </div>
        <div style={{ marginTop: "6rem", marginBottom: "3rem", marginLeft: "5px" }}>
          <h4>Contact</h4>
          <h6>iedc@mec.ac.in</h6>
        </div>
      </div>
    </div>
  </section>
</div> */}
