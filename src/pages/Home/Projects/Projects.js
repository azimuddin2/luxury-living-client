import React from 'react';
import project1 from '../../../assets/Image/washington-avenue.png';
import project2 from '../../../assets/Image/rego-park.png';
import project3 from '../../../assets/Image/gorgeous-house.png';
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            _id: 1,
            image: project1,
            name: 'Villa on Washington Avenue',
            location: 'Dhaka, Bangladesh'
        },
        {
            _id: 2,
            image: project2,
            name: 'Luxury villa in Rego Park',
            location: 'Dhaka, Bangladesh'
        },
        {
            _id: 3,
            image: project3,
            name: 'Gorgeous house',
            location: 'Dhaka, Bangladesh'
        }
    ];

    return (
        <section className='max-w-5xl mx-auto my-16 px-4 lg:px-0'>
            <div className='text-center mb-8'>
                <h3 className='text-lg text-primary font-medium'>Projects</h3>
                <h2 className='text-xl lg:text-3xl text-secondary font-bold'>Discover the latest Interior Design <br /> available today</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </section>
    );
};

export default Projects;