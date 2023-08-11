import React from 'react';
import Project from './Project';
import Carousel from 'react-bootstrap/Carousel';

const ProjectsList = ({ displayedProjects, setSelectedProject, deleteProject }) => {
    console.log("starting project list")
    console.log("Received displayedProjects@@@@@@: ", displayedProjects)

    if (displayedProjects === undefined || displayedProjects.length === 0) {
        return <ul className="tasks__list no-bullet">No projects to show</ul>;
    } else {
        const listOfProjects = (displayedProjects) => {
            return displayedProjects.map((project) => {
                return (
                    <Carousel.Item>
                        <div className='d-flex justify-content-center'>
                            <Project key={project.projectId}
                                project={project}
                                setSelectedProject={setSelectedProject}
                                deleteProject={deleteProject}
                            ></Project>
                        </div>
                    </Carousel.Item>
                );
            });
        };
        return (
            <Carousel interval={null}>
                {listOfProjects(displayedProjects)}
                {/* <ul className="projects__list no-bullet">{listOfProjects(displayedProjects)}</ul> */}
            </Carousel>
            
        ) 
    }
};
export default ProjectsList;