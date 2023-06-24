import React from 'react';
import people1 from '../../../assets/Image/people1.png';
import people2 from '../../../assets/Image/people2.png';
import people3 from '../../../assets/Image/people3.png';
import people4 from '../../../assets/Image/people4.png';
import people5 from '../../../assets/Image/people5.png';
import people6 from '../../../assets/Image/people6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimonials = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            job: 'California',
            description: 'It is a long fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            img: people2,
            name: 'Winson Herry',
            job: 'California',
            description: 'It is a long fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            img: people3,
            name: 'Winson Herry',
            job: 'California',
            description: 'It is a long fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 4,
            img: people4,
            name: 'Winson Herry',
            job: 'California',
            description: 'It is a long fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 5,
            img: people5,
            name: 'Ayman Sadiq',
            job: 'California',
            description: 'It is a long fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 6,
            img: people6,
            name: 'Winson Herry',
            job: 'California',
            description: 'It is a long fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ];

    return (
        <section className='py-12 lg:py-20 px-4 lg:px-0' style={{ backgroundColor: '#F6F6F6' }}>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center mb-12'>
                    <h4 className='text-lg text-primary font-medium'>Testimonial</h4>
                    <h2 className='text-2xl lg:text-3xl text-secondary font-semibold'>What Our Clients Says</h2>
                </div>
                <div>
                    <Swiper
                        style={{
                            "--swiper-pagination-color": "#251D58",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "12px",
                            "--swiper-pagination-bullet-horizontal-gap": "3px"
                        }}
                        className="mySwiper"
                        breakpoints={{
                            576: {
                                width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 3,

                            },
                        }}
                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={24}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                    >
                        <div>
                            {
                                testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                                    <Testimonial testimonial={testimonial}></Testimonial>
                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;