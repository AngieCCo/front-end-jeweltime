import React from 'react';
import './Project.css'

const Project = ({ project }) => {

    const toggleDelete = () => {
        console.log('delete button clicked!')
        // props.deleteProject()
    };

    return (
        <section className="projects">
            <h1>{project.projectName}</h1>
            <ul>
                    <label>{project.id}</label>
                    <p>Project description: {project.description}</p>
                    <p>Starting date: {project.startedAt}</p>
                    <p>Completed at: {project.completedAt}</p>
                    <p>Hours spent: {project.hoursSpent}</p>
                    <p>Materials cost: {project.materialsCost}</p>
                    <p>Materials: {project.materials}</p>
                    <p>Metals: {project.metals}</p>
                    <p>Gemstones: {project.gemstones}</p>
                    <p>Shape: {project.shape}</p>
                    <p>Jewelry type: {project.jewelryType}</p>
                    <p>Notes: {project.notes}</p>
                <li><button onClick={toggleDelete}>Delete</button></li>
            </ul>
        </section>
    )
}

export default Project;