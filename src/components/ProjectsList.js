import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project'

const ProjectsList = (props) => {
    const displayedProjects = props.displayedProjects;

    const listOfProjects = (displayedProjects) => {
        return displayedProjects.map((project) => {
            return (
                <Project
                    id={project.id}
                    projectName={project.projectName}
                    description={project.description}
                    startedAt={project.startedAt}
                    completedAt={project.completedAt}
                    hoursSpent={project.hoursSpent}
                    materialsCost={project.materialsCost}
                    materials={project.materials}
                    metals={project.metals}
                    gemstones={project.gemstones}
                    shape={project.shape}
                    jewelryType={project.jewelryType}
                    notes={project.notes}
                    // TO BE DEFINED
                    deleteProject={props.deleteProject}
                ></Project>
            );
        });
    };
    return <ul className="tasks__list no-bullet">{listOfProjects(displayedProjects)}</ul>;
};
export default ProjectsList;