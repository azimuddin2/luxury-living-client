import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const Project = ({ project }) => {
    const { image, name, location } = project;

    return (
        <div className="card rounded-sm">
            <figure className="pt-10 h-72">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center text-center mt-5">
                <h2 className="text-secondary font-semibold text-lg">{name}</h2>
                <p className='flex justify-center items-center mt-1'>
                    <MdLocationOn className='text-primary'></MdLocationOn>
                    <span className='text-sm'>{location}</span>
                </p>
            </div>
        </div>
    );
};

export default Project;