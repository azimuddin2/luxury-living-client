import React, { useEffect, useState } from 'react';
import Service from './Service';
import Button from '../../Shared/Button/Button';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='max-w-5xl mx-auto'>
            <div className='text-center mb-8'>
                <h3 className='text-lg text-primary font-medium'>Services</h3>
                <h2 className='text-3xl text-secondary font-bold'>We're an agency tailored to all <br /> clients' needs that always delivers</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link className='flex justify-center my-12'>
                <Button>Explore more</Button>
            </Link>
        </section>
    );
};

export default Services;