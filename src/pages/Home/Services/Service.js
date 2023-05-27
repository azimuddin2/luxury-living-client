import React from 'react';

const Service = ({ service }) => {
    const { image, name, price, description, shadow } = service;

    return (
        <div className={`card ${shadow}`}>
            <figure className="pt-10">
                <img src={image} alt={name} className="w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h3>${price}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;