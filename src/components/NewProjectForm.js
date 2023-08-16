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
        event.preventDefault();

        if (projectFormData.projectId === '' || projectFormData.projectId === undefined) {
            createNewProject(projectFormData);
            alert("New Project Created! ✅")
            setProjectFormData(INITIAL_FORM_DATA)
        } else {
            updateProject(projectFormData);
            alert("Project Updated! ✅")
            setProjectFormData(INITIAL_FORM_DATA)
        }
    };

    return (
    <div className="d-grid gap-3 w-80">
        <div className='newProjectForm'>
            <h2 className="newProject">Create a Project</h2>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <br/>
                    <label htmlFor="projectName" className="form-label">Project Name</label>
                    <textarea className="form-control"
                    type="date"
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
                    <label htmlFor="startedAt" className="form-label">Start date</label>
                    <input className="form-control"
                    type="date"
                    id="dateStartedAt"
                    name="startedAt"
                    value={projectFormData.startedAt}
                    onChange={anInputChanged}
                    placeholder="Enter project's starting date"
                    required
                    ></input>
                </div>
                <div>
                    <br/>
                    <label htmlFor="completedAt" className="form-label">Completion date</label>
                    <input className="form-control"
                    type="date"
                    id="completedAt"
                    name="completedAt"
                    value={projectFormData.completedAt}
                    onChange={anInputChanged}
                    placeholder="Enter finish date"
                    ></input>
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
                    placeholder="Enter total hours"
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
