import React from 'react';
import PropTypes from 'prop-types';
import './Project.css'

const Project = (props) => {

    const toggleDelete = () => {
        console.log('delete button clicked!')
        props.deleteProject(props.id)
    };

    return (
        <section className="a_project" key={props.id}>
            <p>{props.description}</p>
            <ul>
                <li><button onClick={toggleDelete}>Delete</button></li>
            </ul>
        </section>
    )
}

export default Project;