import React from "react";
import "./Projects.styles.css";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { incubationProjects, otherProjects } from "./projectList";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    // React.useEffect(() => {
    //   fetch('https://raw.githubusercontent.com/IEDCMEC/data/master/case_study.json')
    //     .then((response) => response.json())
    //     .then((data) => setProjects(data));
    // }, []);

    return (
        <div className="projects-main">
            <div className="pre-incubation">
                <h3 className="project-main-title">Projects Under Pre-Incubation</h3>
                <div className="row project-row">
                    {incubationProjects.map(({ id, ...otherProps }) => (
                        <ProjectCard key={id} {...otherProps} />
                    ))}
                </div>
            </div>
            <div className="other-projects" style={{ marginTop: "7em" }}>
                <h3 className="project-main-title">Other Projects</h3>
                <div className="row project-row">
                    {otherProjects.map(({ id, ...otherProps }) => (
                        <ProjectCard key={id} {...otherProps} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
