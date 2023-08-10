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
            <h1 className='project-name'>{project.projectName}</h1>
            <ul>
                    {/* <label>{project.id}</label> */}
                    <p className="project" style={{ marginTop: '20px' }}><span className="project-label">Project description:</span> {project.description}</p>
                    <p className='project'><span className="project-label">Start date:</span> {project.startedAt}</p>
                    <p className="project"><span className="project-label">Completion date: </span> {project.completedAt}</p>
                    <p className="project"><span className="project-label">Hours spent:</span> {project.hoursSpent}</p>
                    <p className="project"><span className="project-label">Materials cost:</span> ${project.materialsCost}</p>
                    <p className="project"><span className="project-label">Materials:</span> {project.materials}</p>
                    <p className="project"><span className="project-label">Metals:</span> {project.metals}</p>
                    <p className="project"><span className="project-label">Gemstones:</span> {project.gemstones}</p>
                    <p className="project"><span className="project-label">Shape:</span> {project.shape}</p>
                    <p className="project"><span className="project-label">Jewelry type:</span>  {project.jewelryType}</p>
                    <p className="project"><span className="project-label">Notes:</span> {project.notes}</p>
                <li><button onClick={toggleUpdate} className="btn btn-success w-45 mt-2">Update</button></li>
                <li>
                    <button onClick={toggleDelete} className="btn btn-success w-47 mt-2">Delete</button>
                    <div style={{ height: '45px' }}></div>
                </li>
            </ul>
        </section>
    )
}

export default Project;