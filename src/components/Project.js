import React from 'react';
import { useNavigate } from "react-router-dom";
import './Project.css'

const Project = ({ project, setSelectedProject, deleteProject }) => {

    const toggleDelete = () => {
        console.log('delete button clicked!')
        deleteProject(project.projectId);
        alert("Project Deleted! 🗑️")
    };

    let navigate = useNavigate()
    const toggleUpdate = () => {
        console.log('Update button clicked!')
        setSelectedProject(project)
        let path = '/newproject';
        navigate(path);
        // alert("Project Updated! ✅")
    };

    return (
        <section className="projects">
            <h1>{project.projectName}</h1>
            <ul>
                    {/* <label>{project.id}</label> */}
                    <p className="fw-bold">Project description: {project.description}</p>
                    <p className="fw-bold">Starting date: {project.startedAt}</p>
                    <p className="fw-bold">Completed at: {project.completedAt}</p>
                    <p className="fw-bold">Hours spent: {project.hoursSpent}</p>
                    <p className="fw-bold">Materials cost: {project.materialsCost}</p>
                    <p className="fw-bold">Materials: {project.materials}</p>
                    <p className="fw-bold">Metals: {project.metals}</p>
                    <p className="fw-bold">Gemstones: {project.gemstones}</p>
                    <p className="fw-bold">Shape: {project.shape}</p>
                    <p className="fw-bold">Jewelry type: {project.jewelryType}</p>
                    <p className="fw-bold">Notes: {project.notes}</p>
                <li><button onClick={toggleUpdate} className="btn btn-success w-45 mt-2">Update</button></li>
                <li><button onClick={toggleDelete} className="btn btn-success w-47 mt-2">Delete</button></li>
            </ul>
        </section>
    )
}

export default Project;