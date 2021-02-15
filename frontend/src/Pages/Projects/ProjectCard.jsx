import React from 'react'

const ProjectCard = ({ image, title, description, link }) => {
   return (
      <div class="col s12 l4" style={{ padding: '0 1em'}}>
         <a href={link} target="_blank">
            <div className="" style={{ 'padding-top': '50px'}} id="mobcard">
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
         </a>
      </div>
   )
}

export default ProjectCard;

