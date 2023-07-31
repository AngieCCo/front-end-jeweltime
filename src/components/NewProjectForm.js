import React, { useState } from 'react';
import './NewProjectForm.css';

const INITIAL_FORM_DATA = {
    "projectName": '',
    "description": '',
    "startedAt": '',
    "completedAt": '',
    "hoursSpent": '',
    "materialsCost": '',
    "materials": '',
    "metals": '',
    "gemstones": '',
    "shape": '',
    "jewelryType": '',
    "notes": ''
}

const NewProjectForm = ({ createNewProject, selectedProject, updateProject }) => {

    // Set initial values of project BEFORE setting the variable state
    // If done before avoids re-rendering (looping)
    let currentProject = INITIAL_FORM_DATA
    if (selectedProject !== undefined) {
        currentProject = selectedProject
    }

    const [projectFormData, setProjectFormData] = useState(currentProject)

    // F(x)s that handles user input
    const anInputChanged = (event) => {
        const newProjectFormData = {
            ...projectFormData,
            [event.target.name]: event.target.value
        };
        setProjectFormData(newProjectFormData)
    }

    // Create new account form
    const handleSubmit = (event) => {
        console.log("Handling submit", event)
        if (projectFormData.projectId === '' || projectFormData.projectId === undefined) {
            event.preventDefault();
            createNewProject(projectFormData);
        } else {
            event.preventDefault();
            updateProject(projectFormData)
        }
        
    };

    return (
    <div className="new-project-form__container">
        <h2 className="newProject">Create a Project</h2>
        <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="id" id='projectId'>Project id: {projectFormData.projectId}</label>
            <label htmlFor="projectName">Project Name</label>
            <textarea
            type="text"
            id="projectName"
            name="projectName"
            value={projectFormData.projectName}
            onChange={anInputChanged}
            placeholder="Enter the project's name"
            required
            ></textarea>
        <label htmlFor="description">Project's description</label>
            <textarea
            type="text"
            id="description"
            name="description"
            value={projectFormData.description}
            onChange={anInputChanged}
            placeholder="Enter description"
            required
            ></textarea>
        <label htmlFor="startedAt">Started date</label>
            <textarea
            type="text"
            id="startedAt"
            name="startedAt"
            value={projectFormData.startedAt}
            onChange={anInputChanged}
            placeholder="Enter project's starting date"
            required
            ></textarea>
        <label htmlFor="completedAt">Project completed date</label>
            <textarea
            type="text"
            id="completedAt"
            name="completedAt"
            value={projectFormData.completedAt}
            onChange={anInputChanged}
            placeholder="Enter finish date"
            required
            ></textarea>
        <label htmlFor="hoursSpent">Hours spent</label>
            <textarea
            type="text"
            id="hoursSpent"
            name="hoursSpent"
            value={projectFormData.hoursSpent}
            onChange={anInputChanged}
            placeholder="Enter total spent hours"
            required
            ></textarea>
        <label htmlFor="completedAt">Materials' costs</label>
            <textarea
            type="text"
            id="materialsCost"
            name="materialsCost"
            value={projectFormData.materialsCost}
            onChange={anInputChanged}
            placeholder="Enter cost of materials"
            required
            ></textarea>
        <label htmlFor="materials">Materials list</label>
            <textarea
            type="text"
            id="materials"
            name="materials"
            value={projectFormData.materials}
            onChange={anInputChanged}
            placeholder="Enter materials used in project"
            required
            ></textarea>
        <label htmlFor="metals">Metals</label>
            <textarea
            type="text"
            id="metals"
            name="metals"
            value={projectFormData.metals}
            onChange={anInputChanged}
            placeholder="Enter list of metals"
            required
            ></textarea>
        <label htmlFor="gemstones">Gemstones</label>
            <textarea
            type="text"
            id="gemstones"
            name="gemstones"
            value={projectFormData.gemstones}
            onChange={anInputChanged}
            placeholder="Enter list of gemstones"
            required
            ></textarea>
        <label htmlFor="shape">Shape</label>
            <textarea
            type="text"
            id="shape"
            name="shape"
            value={projectFormData.shape}
            onChange={anInputChanged}
            placeholder="Enter jewel shape"
            required
            ></textarea>
        <label htmlFor="jewelryType">Jewelry Type</label>
            <textarea
            type="text"
            id="jewelryType"
            name="jewelryType"
            value={projectFormData.jewelryType}
            onChange={anInputChanged}
            placeholder="Enter jewelry type"
            required
            ></textarea>
        <label htmlFor="notes">Notes</label>
            <textarea
            type="text"
            id="notes"
            name="notes"
            value={projectFormData.notes}
            onChange={anInputChanged}
            placeholder="Notes"
            ></textarea>
        <button type="submit">Create/Update</button>
        </form>
    </div>
    );
};

export default NewProjectForm;
