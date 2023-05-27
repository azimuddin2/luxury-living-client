import React from 'react';
import Button from '../../Shared/Button/Button';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <section className='max-w-5xl mx-auto my-20'>
            <div className='text-center mb-4'>
                <h3 className='text-lg text-primary font-medium'>Contact</h3>
                <h2 className='text-3xl text-secondary font-bold'>Let us handle your <br /> project, professionally.</h2>
            </div>
            <div className=''>
                <form className="card-body px-4 md:px-8 lg:px-8">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="form-control mb-2">
                            <input
                                name='firstName'
                                type="text"
                                placeholder="First Name"
                                style={{ backgroundColor: '#F1F3F6' }}
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                name='lastName'
                                type="text"
                                placeholder="Last Name"
                                style={{ backgroundColor: '#F1F3F6' }}
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                name='phone'
                                type="text"
                                placeholder="Phone Number"
                                style={{ backgroundColor: '#F1F3F6' }}
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <input
                                placeholder='Email Address'
                                name='email'
                                type="email"
                                style={{ backgroundColor: '#F1F3F6' }}
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea
                            name='message'
                            rows='5'
                            placeholder="Your message"
                            style={{ backgroundColor: '#F1F3F6' }}
                            className="textarea focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        ></textarea>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button>
                            <span>Send Message</span>
                            <FiSend className='text-lg ml-1 animate-pulse'></FiSend>
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;