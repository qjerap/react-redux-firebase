import React from 'react';

const ProjectSummary = ({ project }) => (

    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by RP</p>
            <p className="grey-text">3rd of September</p>
        </div>
    </div>


);

export default ProjectSummary;