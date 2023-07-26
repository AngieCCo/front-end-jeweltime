import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project'
import './ProjectsList.css'

const ProjectsList = (props) => {
    const listOfProjects = props.listOfProjects.map((project) => {
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
            updateProject={props.updateProject}
            ></Project>
        )
    })
    return(
        <section className='ProjectsList__container'>
            {listOfProjects}
        </section>

    )
}

export default ProjectsList;