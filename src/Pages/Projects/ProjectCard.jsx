import React from 'react'

const ProjectCard = ({ image, title, description, link }) => {
   return (
      <div className="col s12 m6 l4 project-card-col" >
         <div>
            <div className="card project-card">
               <div className="card-image">
                  <img src={image} style={{ "height": '15em' }} />
               </div>
               <div className="project-card-content case_study_content center" >
                  <p className="project-title">{title}</p>
                  <p className="card-body">{description}</p>
                  <a href={link}><button className="project-btn">View Project</button></a>
               </div>
            </div>
         </div>
      </div >
   )
}

export default ProjectCard;

