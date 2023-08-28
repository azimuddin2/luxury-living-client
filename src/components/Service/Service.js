import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, image, name, price, description, shadow } = service;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/dashboard/${_id}`)}
            className={`card ${shadow} rounded-sm cursor-pointer`}
        >
            <figure className="pt-10">
                <img src={image} alt={name} className="w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-neutral text-lg font-semibold">{name}</h2>
                <h3 className='font-bold text-primary text-lg'>${price}</h3>
                <p className=' text-accent text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default Service;