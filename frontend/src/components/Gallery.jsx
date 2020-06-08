import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "../index.css";
import axios from 'axios';

import Popup from "./GalleryPopup";
import '../css/popup_style.css';  

const Gallery = () => {
    useEffect(() => {
        const elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems);
    });

    const [announcement, setAnnouncement] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/imageupload/")
      .then(res => setAnnouncement(res.data))
    });

    

    const display_announcement = announcement.slice(0,5).map(announcements => {
      return (
        <div>
           <div className="col s12 m4" id="bottom_margin">
           <div className="card-image">
              <img
                style={{ "background-size": "cover", margin: "auto", 'height':'300px', 'width':'300px' }}
                src={announcements.image}
                alt=""
                className="responsive-img mobile_space"
                id="curve_border"
              />
              </div>
            </div>
        </div>
      )
    })

    return (
      <div className="gallery section" id="gallery">

        <div className="container center">
          <h3 className="text-darken-3 center-align" id="bottom_margin">
            Gallery
          </h3>
          <div className="row">
            {display_announcement}
         
            <div className="col s4 m3 valign-wrapper" id="curve_border" onClick={() => setShowPopup(!showPopup)}>
              <div 
                style={{
                               
                                "text-align": "center",
                                "background-color": "#C33427",
                                color: "white",
                                margin:'auto'
                            }}
                className="card-panel gallery_height" 
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


            {showPopup ?  
<Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={() => setShowPopup(!showPopup)}  
/>  
: null  
}  


           
        </div>
        </div>
      </div>
    );
};

export default Gallery;
