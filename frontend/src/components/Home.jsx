import React, { useState, useEffect } from "react";
import "../index.css";
import IEDC from "../Assets/logo.png";
import "materialize-css/dist/css/materialize.min.css";
import HeaderImage from '../Assets/svgs/Frame1.png'
import WaterHose from '../Assets/svgs/WaterHose.png'

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    { title: 'ISRO Remote Sensing Outreach Programme' },
    { title: 'ISRO Remote Sensing Outreach Programme' },
    { title: 'ISRO Remote Sensing Outreach Programme' },
    { title: 'ISRO Remote Sensing Outreach Programme' },
    { title: 'ISRO Remote Sensing Outreach Programme' },
    { title: 'ISRO Remote Sensing Outreach Programme' },
  ]);

  // useEffect(() => {
  //   fetch("https://raw.githubusercontent.com/IEDCMEC/data/master/data.json")
  //     .then((response) => response.json())
  //     .then(({ announcements }) => setAnnouncements(announcements));
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m5 mr2" style={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
          <img src={IEDC} alt="logo" />
          <div className="row" style={{ display: 'flex', 'justifyContent': 'space-evenly', marginTop: '20px' }} >
            <a href="#" className='icon-link'><i class="fa fa-instagram medium" aria-hidden="true"></i></a>
            <a href="#" className='icon-link'><i class="fa fa-linkedin medium" aria-hidden="true"></i></a>
            <a href="#" className='icon-link'><i class="fa fa-linkedin medium" aria-hidden='true' ></i></a>
            <a href="#" className='icon-link'><i class="fa fa-twitter medium" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col s12 m6 offset-m1" >
          <img style={{ height: '50vh' }} src={HeaderImage} alt="headerImage" />
        </div>
      </div>

      {/*.....................Announcements Row .............*/}

      <h3 className='red-text' style={{ marginBottom: '45px' }}  >Announcements</h3>
      <div className="row">
        <div className="col s12 l5 hide-on-med-and-down"  >
          <img src={WaterHose} style={{ height: '40vh' }} alt="logo" />
        </div>
        <div className="col s12 l7 announcements " style={{ height: '40vh' }}  >
          {announcements.map(({ title, link }, index) => (
            <div key={index} className=" announcement-box " style={{ display: "flex", justifyContent: 'space-between' }} >
              <h5 className='left-align' >{title}</h5>
              <a href={link} className='icon-link'><i class="fa fa-instagram medium" aria-hidden="true"></i></a>
            </div>)
          )}
        </div>
      </div>
    </div >
  )

};

export default Home;
