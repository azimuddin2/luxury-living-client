import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import creditCard from '../../../assets/Icon/credit-card.png';
import paypal from '../../../assets/Icon/paypal.png';

const Book = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData()
    const { _id, image, name, price, description, shadow } = service;

    return (
        <section style={{ backgroundColor: '#F6F6F6' }} className='h-full p-4 lg:p-10'>
            <h1 className='text-2xl font-medium'>Booking</h1>
            <div className='mt-4'>
                <form>

                    <div className="form-control mb-3">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input rounded-sm w-full max-w-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>

                    <div className="form-control mb-3">
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            className="input rounded-sm w-full max-w-sm"
                            disabled
                        />
                    </div>

                    <div className="form-control mb-3">
                        <input
                            type="text"
                            defaultValue={name}
                            className="input rounded-sm w-full max-w-sm"
                            disabled
                        />
                    </div>

                    <div className="form-control mb-3">
                        <p className='mb-2 text-accent'>Pay with</p>
                        <div className='flex items-center'>
                            <div className='flex items-center mr-12'>
                                <input type="radio" name="radio-1" className="radio radio-primary radio-sm" checked />
                                <img src={creditCard} alt="" className='w-8 mx-2' />
                                <span>Credit Card</span>
                            </div>

                            <div className='flex items-center'>
                                <input type="radio" name="radio-1" className="radio radio-primary radio-sm" />
                                <img src={paypal} alt="" className='w-6 mx-2' />
                                <span>Paypal</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <p className='text-accent'>Your service charged will be <span className='text-primary font-bold'>${price}</span> </p>
                        <button className='btn btn-primary ml-10 px-10 text-white rounded-sm'>Pay</button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Book;