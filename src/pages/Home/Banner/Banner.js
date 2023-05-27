import React from 'react';
import luxuryLivingImg from '../../../assets/Image/luxury-living.png';
import Button from '../../Shared/Button/Button';

const Banner = () => {
    return (
        <section className='lg:py-16' style={{ backgroundColor: '#F6F6F6' }}>
            <div className="hero max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img src={luxuryLivingImg} alt='Luxury Living' className="max-w-sm rounded-lg w-full mx-auto" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold text-secondary leading-tight">We Build <br /> Your Dream</h1>
                        <p className="py-6 text-accent text-sm">Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                        <Button>Booking</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;