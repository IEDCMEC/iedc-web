import React from 'react'
import { executiveMembers, secondYears, firstYears } from './MembersList'
import './TeamPage.styles.css'
import Card from './Card'
const TeamPage = () => {
   return (
      <div id='team-page' >
         <div className="container">
            <h2 className="title center-align bold" >Nodal Officer</h2>
            <div className="row">
               <div className="col s10 m4 l4 offset-s1">
                  <Card key="1"
                     name= "Prof. Dr. Sreenivas P"
                     designation= "Dept of Mechanical Engineering"
                     imageUrl= {require("../../Assets/team/srinivas.jpg")}
                  />
               </div>
               <div className="black-text message">
                  <p >
                     "Students in MEC always have had a knack for hacking problems and are passionate learners. 
                     At IEDC MEC we provide a platform for our extremely talented engineering minds to collaborate and learn with the faculty, 
                     students, our esteemed alumni and industry experts to stimulate themselves in this amazing environment 
                     and go beyond classroom based learning to focus more on problem based learning and come with innovative ideas 
                     and solutions to create a macroscopic impact in the society. 
                     Come join IEDC and let's find joy in working together to come up with innovative solutions and daring to dream."
                  </p>
               </div>
            </div>
            <h2 className="title center-align bold" >EXECUTIVE COMMITTEE</h2>
            <div className="row grid-container" id="executive-members-list">
               {executiveMembers.map(({ id, ...otherProps }) => (
                  <Card key={id} {...otherProps}  />
               ))}
            </div>
            <br />
            <h2 className="title center-align bold">WEB TEAM</h2>
            <h3 className="grey-text center-align">Second Years</h3>
            <div className="row  grid-container" id="second-years-list">
               {secondYears.map(({ id, ...otherProps }) => (
                  <Card key={id} {...otherProps} />
               ))}
            </div>
            <br />
            <h3 className="grey-text center-align">First Years</h3>
            <div className="row  grid-container" id="first-years-list">
               {firstYears.map(({ id, ...otherProps }) => (
                  <Card key={id} {...otherProps} />
               ))}
            </div>
            <h2 className="title center-align bold">CORE TEAMS</h2>
            <div className="team"  >
               <h3 className="grey-text">Design</h3 >
               <h5 className="grey-text text-darken-4 names">Arpith S, Abhiram Anil, Ameen Azeez, Denin Paul</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Social Media</h3>
               <h5 className="grey-text text-darken-4 names">Akshayraj KR, Namith Krishnan, Savion David, Amalraj K, Krishna Gaadha, Nayana Vinod, Lakshmipriya Mohandas</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Publicity</h3 >
               <h5 className="grey-text text-darken-4 names">Jisna Jose, Gopika Murali, Devdutt Shenoi, Patrick Prakash, Rose Joseph, John Tharian</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Content</h3 >
               <h5 className="grey-text text-darken-4 names">Aswathy S Menon, Abhiram V, Sharath Jacob Jacob, Ethena Mothi, Vishnumaya S Unni</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Media</h3 >
               <h5 className="grey-text text-darken-4 names">Karthik Suresh, Denin Paul, Adil Rafeek</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Marketing</h3 >
               <h5 className="grey-text text-darken-4 names">Niranjana, Denil Geo Daise, Neetha Jayan, Razeen Muhammed, Nandakrishnan R</h5>
            </div>
         </div>
      </div>
   )
}

export default TeamPage
