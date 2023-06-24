import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';
import logo from '../../../assets/Image/white-logo.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#251D58' }} className='px-4 lg:px-0'>
            <div className="footer max-w-5xl mx-auto text-gray-200 pt-16 pb-12 print:hidden">
                <div>
                    <img src={logo} alt="Logo" className='w-28'/>
                    <p className='mt-3'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial.</p>
                    <div className='flex items-center mt-4'>
                        <p className='bg-white text-secondary mr-2 p-2 rounded-full cursor-pointer'><FaGoogle ></FaGoogle></p>
                        <p className='bg-white text-secondary mr-2 p-2 rounded-full cursor-pointer'><FaTwitter></FaTwitter></p>
                        <p className='bg-white text-secondary mr-2 p-2 rounded-full cursor-pointer'><FaInstagram></FaInstagram></p>
                        <p className='bg-white text-secondary mr-2 p-2 rounded-full cursor-pointer'><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-slate-100">About</span>
                    <a href="/" className="link link-hover font-medium">Home</a>
                    <a href="/" className="link link-hover font-medium">Service</a>
                    <a href="/" className="link link-hover font-medium">Contact</a>
                    <a href="/" className="link link-hover font-medium">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover font-medium">Why Luxury Living</a>
                    <a href="/" className="link link-hover font-medium">About</a>
                    <a href="/" className="link link-hover font-medium">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a href="/" className="link link-hover font-medium">Support Center</a>
                    <a href="/" className="link link-hover font-medium">Feedback</a>
                    <a href="/" className="link link-hover font-medium">Accessibility</a>
                </div>
            </div>
            <p className='text-white text-center pb-4 text-sm'>© Luxury Living 2023</p>
            <ScrollToTop
                className='animate-bounce flex justify-center items-center'
                smooth
                color="#fff"
                width="16"
                height="16"
                top="400"
                style={{ backgroundColor: '#251D58', boxShadow: 'none', }}
            />
        </footer>
    );
};

export default Footer;