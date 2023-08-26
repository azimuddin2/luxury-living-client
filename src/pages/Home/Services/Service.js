import React from 'react';

const Service = ({ service }) => {
    const { image, name, price, description, shadow } = service;

    return (
        <div className={`card ${shadow} rounded-sm`}>
            <figure className="pt-10">
                <img src={image} alt={name} className="w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 style={{color: '#16322E'}} className="card-title text-lg font-semibold">{name}</h2>
                <h3 className='font-bold text-primary text-lg'>${price}</h3>
                <p className=' text-accent text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default Service;