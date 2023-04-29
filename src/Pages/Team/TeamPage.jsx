import React from 'react'
import { executiveMembers, webTeam, advisoryBoard,ex_executiveMembers_2021,ex_executiveMembers_2022 } from './MembersList'
import './TeamPage.styles.css'
import Card from './Card'
import {
   Accordion,
   AccordionItem,
   AccordionItemButton,
   AccordionItemHeading,
   AccordionItemPanel,
 } from "react-accessible-accordion";
 import "./accordionStyles.css"
const TeamPage = () => {
   return (
      <div id='team-page' >
            <div className="container">

            <h2 className="title center-align bold" style={{ color: "#BF2200" }} >Advisory Board</h2>
            <div className="row  " id="web-team-list">
               {advisoryBoard.map(({ id, ...otherProps }) => (
                  <Card key={id+50} spacingId={id} {...otherProps} />
               ))}
            </div>

            <h2 className="title center-align bold" style={{ color: "#BF2200" }} >Nodal Officer</h2>
            <div className="row valign-wrapper" style={{flexWrap:"wrap"}}>
               <div className="col s12 m12 l5 text-center">
                  <img className="officer-img" src={require("../../Assets/team/srinivas.jpg")} alt="member" />
               </div>
               <div className="col m12 l7 black-text officer-content">
                  <h3>Prof. Dr. Sreenivas P</h3>
                  <h4 className="text-center">Dept of Mechanical Engineering</h4>
               </div>
            </div>
            <div className="black-text message text-center">
               <p >
                  "Students in MEC always have had a knack for hacking problems and are passionate learners.
                  At IEDC MEC we provide a platform for our extremely talented engineering minds to collaborate and learn with the faculty,
                  students, our esteemed alumni and industry experts to stimulate themselves in this amazing environment
                  and go beyond classroom based learning to focus more on problem based learning and come with innovative ideas
                  and solutions to create a macroscopic impact in the society.
                  Come join IEDC and let's find joy in working together to come up with innovative solutions and daring to dream."
                  </p>
            </div>

            <h2 className="title center-align bold" style={{ color: "#BF2200" }}  >Executive Committee</h2>
            <div className="row" id="executive-members-list">

               {executiveMembers.map(({ id, ...otherProps }) => (
                  <Card key={id} spacingId={id} {...otherProps} />
               ))}

            </div>
            <br />

            <h2 className="title center-align bold" style={{ color: "#BF2200" }}  > Ex-Executive Committee</h2>
            <div className="faq-text">
            <Accordion preExpanded={[1, 2]} allowMultipleExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        2021-22
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="row" id="executive-members-list">
         
         {ex_executiveMembers_2022.map(({ id, ...otherProps }) => (
            <Card key={id} spacingId={id} {...otherProps} />
         ))}

      </div>
      <br /> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        2020-21
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="row" id="executive-members-list">
         
         {ex_executiveMembers_2021.map(({ id, ...otherProps }) => (
            <Card key={id} spacingId={id} {...otherProps} />
         ))}

      </div>
      <br /> 
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

            </div>
          
                    

            {/* <h2 className="title center-align bold" style={{ color: "#BF2200" }} >Web Team</h2>
            <div className="row  " id="web-team-list">
               {webTeam.map(({ id, ...otherProps }) => (
                  <Card key={id} spacingId={id + 10} {...otherProps} />
               ))}
            </div> */}

            {/* <h2 className="title center-align bold" style={{ color: "#BF2200" }}  >Core Teams</h2>
            <div className="core-team"  >
               <h3>Design</h3 >
               <h5>Arpith S, Abhiram Anil, Ameen Azeez, Elizabeth, Rosia, Malavika</h5>
            </div>
            <div className="core-team">
               <h3>Social Media</h3>
               <h5>Akshayraj KR, Namith Krishnan, Savion David, Amalraj K, Krishna Gaadha, Nayana Vinod, Lakshmipriya Mohandas</h5>
            </div>
            <div className="core-team">
               <h3>Publicity</h3 >
               <h5>Jisna Jose, Gopika Murali, Devdutt Shenoi, Patrick Prakash, Rose Joseph, John Tharian</h5>
            </div>
            <div className="core-team">
               <h3>Content</h3 >
               <h5>Aswathy S Menon, Abhiram V, Sharath Jacob Jacob, Ethena Mothi, Vishnumaya S Unni</h5>
            </div>
            <div className="core-team">
               <h3>Media</h3 >
               <h5>Karthik Suresh, Adil Rafeek</h5>
            </div>
            <div className="core-team">
               <h3>Marketing</h3 >
               <h5>Niranjana, Denil Geo Daise, Neetha Jayan, Razeen Muhammed, Nandakrishnan R</h5>
            </div> */}
         </div >
      </div >
   )
}

export default TeamPage
