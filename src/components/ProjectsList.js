import React from 'react';
import Project from './Project'

const ProjectsList = ({ displayedProjects }) => {
    console.log("starting project list")
    console.log("Received displayedProjects: ", displayedProjects)

    if (displayedProjects === undefined || displayedProjects.length === 0) {
        return <ul className="tasks__list no-bullet">No projects to show</ul>;
    } else {
        const listOfProjects = (displayedProjects) => {
            return displayedProjects.map((project) => {
                return (
                    <Project key={project.id}
                        project={project}
                    ></Project>
                );
            });
        };
        return <ul className="tasks__list no-bullet">{listOfProjects(displayedProjects)}</ul>    
    }
};
export default ProjectsList;