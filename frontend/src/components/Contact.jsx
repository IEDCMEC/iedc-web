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
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      name: '',
      phone:'',
      email:'',
      message:'',
    })
    alert('submit form');
  }

  render(){
    const { name, phone, email, message } = this.state;
    return (
      <div id="top_margin">
        <section id="box_curve_top">
          <div className="contact container" id="centre_mobile">
            <div className="row">
              <div className="col s11 l6 z-depth-2" id="contact">
                <div className="col s11 m4 l12 center-align" id="heading">
                  <h4 className="text-darken-3" id="bottom_margin">
                    Connect with us
                  </h4>
                </div>
                <form onSubmit={this.onSubmit}>
                  <div className="col s11 m4 l6" id="column1">
                    <div className="input-field">
                      <input type="text" name='name' value={name} onChange={this.onChange} />
                      <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="input-field">
                      <input type="email" name='email' value={email} onChange={this.onChange} />
                      <label htmlFor="email">Your email</label>
                    </div>
                  </div>
                  <div className="col s11 m4 l6" id='column2'>
                    <div className="input-field">
                      <input type="text" name='phone' value={phone} onChange={this.onChange} />
                      <label htmlFor="phone">Your Phone Number</label>
                    </div>
                    <div className="input-field">
                      <textarea placeholder='Your message' name="message" value={message} onChange={this.onChange} cols="30" rows="10" className="materialize-textarea"></textarea>
                    </div>
                  </div>
                  <div className="col s11 m4 l12 center-align" style={{marginBottom:'2em'}}>
                    <input type="submit" className="btn" value="submit" style={{ 'background-color': '#C33427' }} onClick={this.resetForm} />
                  </div>
                </form>
              </div>
              <div
                className="col s12 m4 l6  margin_top_mobile  center-align"
                id="follow-us"
              >
                <h4 id="bottom_margin" className="center-alingnment">
                  Follow Us
                </h4>
                <div className="col s12 m10">
                  <div className="row">
                    <a href="" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-facebook fa-2x" />
                    </a>
                    <a href="" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-twitter fa-2x" />
                    </a>
                    <a href="" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-linkedin fa-2x" />
                    </a>
                    <a href="" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-google-plus fa-2x" />
                    </a>
                    <a href="" style={{ color: "#C33427" }} id="icon_space">
                      <i className="fab circle fa-pinterest fa-2x" />
                    </a>
                  </div>

                  <div className="row margin_top_mobile ">
                    <h4>Contact</h4>
                    <p>reachiedcmec@gmail.com</p>
                    <p>+91 82812 84062</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="extra_bottom" />
        </section>
      </div>
    );
  }
}

export default Contact;
