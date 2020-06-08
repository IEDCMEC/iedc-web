import React, {Component} from "react";

import axios from 'axios';

import Popup from "./AchievementsPopup";
import '../css/popup_style.css';  



class Achievements extends Component{
  constructor() {
    super();
    this.state = {
      announcement: [],
      showPopup: false 
    }
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/imageupload/")
      .then(res => this.setState({ announcement: res.data }))
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

  render(){
      const display_announcement = this.state.announcement.slice(0,3).map(announcements => {
        return (
          <div>
            <div className="col s12 m3">
              <div className="card card_design card_height" id="curve_border">
                <div className="card-image">
                  {/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
                  <img
                    src={announcements.image}
                    alt="1"
                    className="responsive-img"
                    id="curve_border_top"
                  />
                </div>
                <div className="card-content">
                  <p>{announcements.title}</p>
                </div>
                <div className="card-action">
                  <a href="#" style={{ color: "#C33427" }}>
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })

      return (
      <section className="section" id='achievements'>
        <div className="container" id="section_spacing">
          <h3 className="text-darken-3 center-align" id="bottom_margin">
            Achievements
          </h3>
          <div className="row ">
          {display_announcement}




          <div className="col s12 m3 valign-wrapper" id="curve_border" onClick={this.togglePopup.bind(this)}>
              <div
                style={{
                                "text-align": "center",
                                "background-color": "#C33427",
                                color: "white",
                                margin:'auto'
                            }}
                className="card-panel more_height" 
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


            {this.state.showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  


          </div>
        </div>
      </section>
    );
  }
};

export default Achievements;
