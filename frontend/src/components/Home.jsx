import React, { useState, useEffect } from "react";
import IEDC from "../Assets/logo.png";
import "materialize-css/dist/css/materialize.min.css";
import HeaderImage from '../Assets/svgs/Frame1.png'
import WaterHose from '../Assets/svgs/WaterHose.png'

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'ISRO Remote Sensing Outreach Programme', link: '/' },
    { id: 2, title: 'ISRO Remote Sensing Outreach Programme', link: '/' },
    { id: 3, title: 'ISRO Remote Sensing Outreach Programme', link: '/' },
    { id: 4, title: 'ISRO Remote Sensing Outreach Programme', link: '/' },
    { id: 5, title: 'ISRO Remote Sensing Outreach Programme', link: '/' },
    { id: 6, title: 'ISRO Remote Sensing Outreach Programme', link: '/' },
  ]);

  // useEffect(() => {
  //   fetch("https://raw.githubusercontent.com/IEDCMEC/data/master/data.json")
  //     .then((response) => response.json())
  //     .then(({ announcements }) => setAnnouncements(announcements));
  // }, []);

  return (
    <div className="container center" id='home'  >
      <div className="row" >
        <div className="col s12 m6 mr2" style={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
          <img src={IEDC} className="iedc_img" alt="logo" />
          <div className="row" style={{ display: 'flex', 'justifyContent': 'space-evenly', marginTop: '20px' }} >
            <a href="https://www.instagram.com/iedcmec/" className='icon-link'><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/company/iedcmec/" className='icon-link'><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://discord.gg/Je6rGaT" className='icon-link'><i class="fab fa-discord" aria-hidden='true' ></i></a>
            <a href="https://twitter.com/iedc_mec" className='icon-link'><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col s12 m5 offset-m1" >
          <img style={{ height: '50vh' }} className='responsive-img illustration' src={HeaderImage} alt="headerImage" />
        </div>
      </div>

      {/*.....................Announcements Row .............*/}

      {/* <h3 style={{ marginBottom: '45px', color: '#BF2200' }}  >Announcements</h3>
      <div className="row">
        <div className="col s12 l5 hide-on-med-and-down"  >
          <img src={WaterHose} style={{ height: '40vh' }} alt="logo" />
        </div>
        <div className="col s12 l7 announcements " style={{ height: '40vh' }}  >
          {announcements.map(({ title, id, link }) => (
            <div key={id} className=" announcement-box " style={{ display: "flex", justifyContent: 'space-between' }} >
              <h5 className='left-align' >{title}</h5>
              <a href={link} className='icon-link'><i class="fa fa-instagram medium" aria-hidden="true"></i></a>
            </div>)
          )}
        </div>
      </div> */}
      <h2 className="title center-align bold" style={{ color: "#BF2200" }} >Nodal Officer</h2>
      <div className="row ">
        <div className="col s12 m12 l5 text-center">
          <img className="officer-img" src={require("../Assets/team/srinivas.jpg")} alt="member" />
        </div>
        <div className="col m12 l7 black-text officer-content">
          <h3>Prof. Dr. Sreenivas P</h3>
          <h4>Dept of Mechanical Engineering</h4>
        </div>
      </div>
      <div className="black-text message text-center mobile-text">
        <p >
          "Students in MEC always have had a knack for hacking problems and are passionate learners.
          At IEDC MEC we provide a platform for our extremely talented engineering minds to collaborate and learn with the faculty,
          students, our esteemed alumni and industry experts to stimulate themselves in this amazing environment
          and go beyond classroom based learning to focus more on problem based learning and come with innovative ideas
          and solutions to create a macroscopic impact in the society.
          Come join IEDC and let's find joy in working together to come up with innovative solutions and daring to dream."
        </p>
      </div>
    </div >
  )

};

export default Home;
