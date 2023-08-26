import React from 'react';
import Service from './Service';
import Button from '../../Shared/Button/Button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Services = () => {

    const {data: services, isLoading, error} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <p style={{ color: '#f91944', textAlign: 'center' }}>error: {error.message}</p>
    }

    return (
        <section className='max-w-5xl mx-auto px-4 lg:px-0'>
            <div className='text-center mb-8'>
                <h3 className='text-lg text-primary font-medium'>Services</h3>
                <h2 className='text-xl lg:text-3xl text-secondary font-bold'>We're an agency tailored to all <br /> client's needs that always delivers</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service => <Service
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