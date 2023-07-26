import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewProjectForm.css';

const NewAccountForm = ({ createNewProject }) => {
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


    // Create new account form
    const handleSubmit = (event) => {
        event.preventDefault();
        // Don't forget to create the createNewAccount function
        createNewProject({ 
            'projectName': projectName, 'description': description, 
            'startedAt': startedAt, 'completedAt': completedAt,
            'hoursSpent': hoursSpent, 'materialsCost': materialsCost,
            'materials': materials, 'metals': metals, 'gemstones': gemstones,
            'shape': shape, 'jewelryType': jewelryType
        });
        setProjectName('');
        setDescription('');
        setCompletedAt('');
        setHoursSpent('');
        setMaterialsCost('');
        setMaterials('');
        setMetals('');
        setGemstones('');
        setShape('');
        setJewelryType('');
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
        <label htmlFor="hoursSpent">Hours spent in this project</label>
            <textarea
            type="text"
            id="hoursSpent"
            name="hoursSpent"
            value={hoursSpent}
            onChange={handleHoursSpent}
            placeholder="Enter total spent hours"
            required
            ></textarea>
        <label htmlFor="completedAt">Materials costs</label>
            <textarea
            type="text"
            id="materialsCost"
            name="magerialsCost"
            value={materialsCost}
            onChange={handleMaterialsCost}
            placeholder="Enter cost of materials"
            required
            ></textarea>
        {/* Meterials needs to be with input box */}
        <label htmlFor="materials">Materials used</label>
            <textarea
            type="text"
            id="materials"
            name="completedAt"
            value={completedAt}
            onChange={handleCompletedAt}
            placeholder="Enter finish date"
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
        <button type="submit">Create</button>
        </form>
    </div>
    );
};

export default NewAccountForm;
