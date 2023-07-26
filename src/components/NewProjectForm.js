import React, { useState } from 'react';
import './NewProjectForm.css';

const NewProjectForm = ({ createNewProject }) => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [startedAt, setStartedAt] = useState('');
    const [completedAt, setCompletedAt] = useState('');
    const [hoursSpent, setHoursSpent] = useState('');
    const [materialsCost, setMaterialsCost] = useState('');
    const [materials, setMaterials] = useState('');
    const [metals, setMetals] = useState('');
    const [gemstones, setGemstones] = useState('');
    const [shape, setShape] = useState('');
    const [jewelryType, setJewelryType] = useState('');
    const [notes, setNotes] = useState('');
    
    // F(x)s that handles user input
    const handleProjectName = (event) => {
        setProjectName(event.target.value);
    };
    
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleStartedAt = (event) => {
        setStartedAt(event.target.value);
    };

    const handleCompletedAt = (event) => {
        setCompletedAt(event.target.value);
    };

    const handleHoursSpent = (event) => {
        setHoursSpent(event.target.value);
    };
    
    const handleMaterialsCost = (event) => {
        setMaterialsCost(event.target.value);
    };

    const handleMaterials = (event) => {
        setMaterials(event.target.value);
    };

    const handleMetals = (event) => {
        setMetals(event.target.value);
    };

    const handleGemstones = (event) => {
        setGemstones(event.target.value);
    };
    
    const handleShape = (event) => {
        setShape(event.target.value);
    };

    const handleJewelryType = (event) => {
        setJewelryType(event.target.value);
    };

    const handleNotes = (event) => {
        setNotes(event.target.value);
    };


    // Create new account form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Don't forget to create the createNewAccount function
        createNewProject({ 
            'projectName': projectName, 'description': description, 
            'startedAt': startedAt, 'completedAt': completedAt,
            'hoursSpent': hoursSpent, 'materialsCost': materialsCost,
            'materials': materials, 'metals': metals, 'gemstones': gemstones,
            'shape': shape, 'jewelryType': jewelryType, 'notes': notes
        });
        // setProjectName('');
        // setDescription('');
        // setCompletedAt('');
        // setHoursSpent('');
        // setMaterialsCost('');
        // setMaterials('');
        // setMetals('');
        // setGemstones('');
        // setShape('');
        // setJewelryType('');
    };

    return (
    <div className="new-project-form__container">
        <h2 className="newProject">Create a Project</h2>
        <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="projectName">Project Name</label>
            <textarea
            type="text"
            id="projectName"
            name="projectName"
            value={projectName}
            onChange={handleProjectName}
            placeholder="Enter the project's name"
            required
            ></textarea>
        <label htmlFor="description">Project's description</label>
            <textarea
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleDescription}
            placeholder="Enter description"
            required
            ></textarea>
        <label htmlFor="startedAt">Started date</label>
            <textarea
            type="text"
            id="startedAt"
            name="startedAt"
            value={startedAt}
            onChange={handleStartedAt}
            placeholder="Enter project's starting date"
            required
            ></textarea>
        <label htmlFor="completedAt">Project completed date</label>
            <textarea
            type="text"
            id="completedAt"
            name="completedAt"
            value={completedAt}
            onChange={handleCompletedAt}
            placeholder="Enter finish date"
            required
            ></textarea>
        <label htmlFor="hoursSpent">Hours spent</label>
            <textarea
            type="text"
            id="hoursSpent"
            name="hoursSpent"
            value={hoursSpent}
            onChange={handleHoursSpent}
            placeholder="Enter total spent hours"
            required
            ></textarea>
        <label htmlFor="completedAt">Materials' costs</label>
            <textarea
            type="text"
            id="materialsCost"
            name="magerialsCost"
            value={materialsCost}
            onChange={handleMaterialsCost}
            placeholder="Enter cost of materials"
            required
            ></textarea>
        <label htmlFor="materials">Materials list</label>
            <textarea
            type="text"
            id="materials"
            name="materials"
            value={materials}
            onChange={handleMaterials}
            placeholder="Enter finish date"
            required
            ></textarea>
        <label htmlFor="metals">Metals</label>
            <textarea
            type="text"
            id="metals"
            name="metals"
            value={metals}
            onChange={handleMetals}
            placeholder="Enter list of metals"
            required
            ></textarea>
        <label htmlFor="gemstones">Gemstones</label>
            <textarea
            type="text"
            id="gemstones"
            name="gemstones"
            value={gemstones}
            onChange={handleGemstones}
            placeholder="Enter list of gemstones"
            required
            ></textarea>
        <label htmlFor="shape">Shape</label>
            <textarea
            type="text"
            id="shape"
            name="shape"
            value={shape}
            onChange={handleShape}
            placeholder="Enter jewel shape"
            required
            ></textarea>
        <label htmlFor="jewelryType">Jewelry Type</label>
            <textarea
            type="text"
            id="jewelryType"
            name="jewelryType"
            value={jewelryType}
            onChange={handleJewelryType}
            placeholder="Enter jewelry type"
            required
            ></textarea>
        <label htmlFor="notes">Notes</label>
            <textarea
            type="text"
            id="notes"
            name="notes"
            value={notes}
            onChange={handleNotes}
            placeholder="Notes"
            ></textarea>
        <button type="submit">Create/Update</button>
        </form>
    </div>
    );
};

export default NewProjectForm;
