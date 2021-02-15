import React, { Component } from "react";
import './Projects.styles.css'
import ProjectCard from './ProjectCard'
import { incubationProjects, otherProjects } from './projectList'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  // componentDidMount() {
  //   fetch('https://raw.githubusercontent.com/IEDCMEC/data/master/case_study.json')
  //     .then(response => response.json())
  //     .then(data => this.setState({ projects: data }));
  // }

  render() {
    return (
      <div className="projects-main">
        <div className="pre-incubation">
          <h3 className="project-main-title">Projects under pre-incubation</h3>
          <div className="row project-row">
            {incubationProjects.map(({ id, ...otherProps }) => (
              <ProjectCard key={id} {...otherProps} />
            ))}
          </div>
        </div>
        <div className="other-projects" style={{ marginTop: '7em' }}>
          <h3 className="project-main-title">Other projects</h3>
          <div className="row project-row">
            {otherProjects.map(({ id, ...otherProps }) => (
              <ProjectCard key={id} {...otherProps} />
            ))}
          </div>
        </div>

        {/* <div className="row" >
               {
                  this.state.case_studies.map(case_study => {
                     return(
                        <Card image={"https://raw.githubusercontent.com/IEDCMEC/data/master/" + case_study.url}
                           title={case_study.name}
                           link={case_study.link}
                           />
                     )
                  })
               }
            </div> */}
      </div>
    )
  }
}

export default Projects;
