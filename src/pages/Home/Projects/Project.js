import React from 'react';

const Project = ({ project }) => {
    const { image, name, location } = project;

    return (
        <div className="card rounded-sm">
            <figure className="pt-10 h-72">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center text-center">
                <h2 className="text-secondary font-semibold text-lg">{name}</h2>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default Project;