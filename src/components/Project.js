import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import './Project.css'

const Project = ({ project, setSelectedProject, deleteProject }) => {

    const toggleDelete = () => {
        deleteProject(project.projectId);
        alert("Project Deleted! 🗑️")
    };

    let navigate = useNavigate()
    const toggleUpdate = () => {
        setSelectedProject(project)
        let path = '/newproject';
        navigate(path);
    };

    return (
            <section className="projects">
                <Card style={{ width: "32rem" }}>
                    <Card.Img variant="top" src="/NewLogo.png" className='cardImage'/>
                        <Card.Body>
                            <Card.Title>
                                <h1 className='project-name'>{project.projectName}</h1>
                            </Card.Title>
                            <Card.Text>
                                <ul>
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
                                </ul>
                                <Card.Footer>
                                    <div>
                                    <button onClick={toggleUpdate} className="btn btn-success w-45 mr-1 content-center">Update</button>{' '}
                                    <button onClick={toggleDelete} className="btn btn-success w-47 mr-1">Delete</button>
                                    </div>
                                </Card.Footer>
                            </Card.Text>
                        </Card.Body>
                </Card>
                <div style={{ height: '45px' }}></div>
            </section>
                    
    )
}

export default Project;