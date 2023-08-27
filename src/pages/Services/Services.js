import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import Service from '../../components/Service/Service';

const Services = () => {

    const { data: services, isLoading, error } = useQuery({
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
        <section className='max-w-5xl mx-auto px-4 lg:px-0 mt-12 mb-14'>
            <div className='text-center mb-8'>
                <h3 className='text-lg text-primary font-medium'>Services</h3>
                <h2 className='text-xl lg:text-3xl text-secondary font-bold'>We're an agency tailored to all <br /> client's needs that always delivers</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;