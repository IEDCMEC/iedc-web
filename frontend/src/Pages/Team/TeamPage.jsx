import React from 'react'
import Navbar from '../../components/Navbar'
import { executiveMembers, secondYears, firstYears } from './MembersList'
import './TeamPage.styles.css'
import Card from './Card'
const TeamPage = () => {
   return (
      <div id='team-page' >
         <div className="container">
            <h2 className="title center-align bold">EXECUTIVE COMITTEE</h2>
            <div className="row" id="executive-members-list">
               {executiveMembers.map(({ id, ...otherProps }) => (
                  <Card key={id} {...otherProps} />
               ))}
            </div>
            <br />
            <h2 className="title center-align bold">CORE MEMBERS</h2>
            <h3 className="grey-text center-align">Second Years</h3>
            <div className="row" id="second-years-list">
               {secondYears.map(({ id, ...otherProps }) => (
                  <Card key={id} {...otherProps} />
               ))}
            </div>
            <br />
            <h3 className="grey-text center-align">First Years</h3>
            <div className="row" id="first-years-list">
               {firstYears.map(({ id, ...otherProps }) => (
                  <Card key={id} {...otherProps} />
               ))}
            </div>

            <h2 className="title center-align bold">TEAMS</h2>
            <div className="team"  >
               <h3 className="grey-text">Web Team:</h3 >
               <h5 className="grey-text text-darken-4 names">John Doe, John Doe, John Doe</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Design Team:  </h3 >
               <h5 className="grey-text text-darken-4 names">John Doe, John Doe, John Doe</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Marketing Team: </h3 >
               <h5 className="grey-text text-darken-4 names">John Doe, John Doe, John Doe</h5>
            </div>
            <div className="team">
               <h3 className="grey-text">Social Media: </h3 >
               <h5 className="grey-text text-darken-4 names">John Doe, John Doe, John Doe</h5>
            </div>
         </div>
      </div>
   )
}

export default TeamPage
