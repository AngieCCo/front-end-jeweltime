import React, { useState } from 'react';
import './NewProjectForm.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        // ADDITION:
        event.preventDefault();
        console.log("Handling submit", event)

        // Output the data being sent to the backend
        console.log("Project Form Data:", projectFormData);

        if (projectFormData.projectId === '' || projectFormData.projectId === undefined) {
            console.log("Creating new project...");
            createNewProject(projectFormData);
            alert("New Project Created! ✅")
            setProjectFormData(INITIAL_FORM_DATA)
        } else {
            console.log("Updating project...");
            updateProject(projectFormData);
            alert("Project Updated! ✅")
            setProjectFormData(INITIAL_FORM_DATA)
        }
    };

    return (
    <div className="d-grid gap-3 w-100">
        <div className='newProjectForm'>
            <h2 className="newProject">Create a Project</h2>
            <form className="form__container" onSubmit={handleSubmit}>
                {/* <label htmlFor="id" id='projectId'>Project id: {projectFormData.projectId}</label> */}
                <div className='form-group'>
                    <br/>
                    <label htmlFor="projectName" className="form-label">Project Name</label>
                    <textarea className="form-control"
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectFormData.projectName}
                    onChange={anInputChanged}
                    placeholder="Enter the project's name"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="description" className="form-label">Project's description</label>
                    <textarea className="form-control"
                    type="text"
                    id="description"
                    name="description"
                    value={projectFormData.description}
                    onChange={anInputChanged}
                    placeholder="Enter description"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="startedAt" className="form-label">Started date</label>
                    <textarea className="form-control"
                    type="text"
                    id="startedAt"
                    name="startedAt"
                    value={projectFormData.startedAt}
                    onChange={anInputChanged}
                    placeholder="Enter project's starting date"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="completedAt" className="form-label">Project completed date</label>
                    <textarea className="form-control"
                    type="text"
                    id="completedAt"
                    name="completedAt"
                    value={projectFormData.completedAt}
                    onChange={anInputChanged}
                    placeholder="Enter finish date"
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="hoursSpent" className="form-label">Hours spent</label>
                    <textarea className="form-control"
                    type="text"
                    id="hoursSpent"
                    name="hoursSpent"
                    value={projectFormData.hoursSpent}
                    onChange={anInputChanged}
                    placeholder="Enter total spent hours"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="completedAt" className="form-label">Materials' costs</label>
                    <textarea className="form-control"
                    type="text"
                    id="materialsCost"
                    name="materialsCost"
                    value={projectFormData.materialsCost}
                    onChange={anInputChanged}
                    placeholder="Enter cost of materials"
                    required
                    ></textarea>
                </div>
                <div>
                <br/>
                    <label htmlFor="materials" className="form-label">Materials list</label>
                    <textarea className="form-control"
                    type="text"
                    id="materials"
                    name="materials"
                    value={projectFormData.materials}
                    onChange={anInputChanged}
                    placeholder="Enter materials used in project"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="metals" className="form-label">Metals</label>
                    <textarea className="form-control"
                    type="text"
                    id="metals"
                    name="metals"
                    value={projectFormData.metals}
                    onChange={anInputChanged}
                    placeholder="Enter list of metals"
                    required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="gemstones" className="form-label">Gemstones</label>
                    <textarea className="form-control"
                    type="text"
                    id="gemstones"
                    name="gemstones"
                    value={projectFormData.gemstones}
                    onChange={anInputChanged}
                    placeholder="Enter list of gemstones"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="shape" className="form-label">Shape</label>
                    <textarea className="form-control"
                    type="text"
                    id="shape"
                    name="shape"
                    value={projectFormData.shape}
                    onChange={anInputChanged}
                    placeholder="Enter jewel shape"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="jewelryType" className="form-label">Jewelry Type</label>
                    <textarea className="form-control"
                    type="text"
                    id="jewelryType"
                    name="jewelryType"
                    value={projectFormData.jewelryType}
                    onChange={anInputChanged}
                    placeholder="Enter jewelry type"
                    required
                    ></textarea>
                </div>
                <div>
                    <br/>
                    <label htmlFor="notes" className="form-label">Notes</label>
                    <textarea className="form-control"
                    type="text"
                    id="notes"
                    name="notes"
                    value={projectFormData.notes}
                    onChange={anInputChanged}
                    placeholder="Notes"
                    ></textarea>
                </div>
                <div>
                <br/>
                <button type="submit" className="btn btn-success w-100 mt-2">Create/Update</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default NewProjectForm;
