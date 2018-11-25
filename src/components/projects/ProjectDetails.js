import React from 'react'

const ProjectDetails = (props) => {


    const id = props.match.params.id

    return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>lorem Ipsum valor dami kugir dash da ipto dorukamki! Koundoro batomoboule ju ki ra tunak. Tib o'fjellorn youqaway...</p>
            </div>
            <div className="card-action grey lighten-5 grey-text">
                <div>Posted by RP</div>
                <div>3rd of November</div>
            </div>
        </div>
    </div>

    )    
}





export default ProjectDetails

