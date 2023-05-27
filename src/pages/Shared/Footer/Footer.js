import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';
import logo from '../../../assets/Image/white-logo.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#251D58' }}>
            <div className="footer max-w-5xl mx-auto text-gray-200 py-20 print:hidden">
                <div>
                    <img src={logo} alt="Logo" className='w-28'/>
                    <p className='mt-3'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial.</p>
                    <div className='flex items-center mt-4'>
                        <p className='bg-white text-secondary mr-2 p-3 rounded-full cursor-pointer'><FaGoogle ></FaGoogle></p>
                        <p className='bg-white text-secondary mr-2 p-3 rounded-full cursor-pointer'><FaTwitter></FaTwitter></p>
                        <p className='bg-white text-secondary mr-2 p-3 rounded-full cursor-pointer'><FaInstagram></FaInstagram></p>
                        <p className='bg-white text-secondary mr-2 p-3 rounded-full cursor-pointer'><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-slate-100">About</span>
                    <a href="/" className="link link-hover">Home</a>
                    <a href="/" className="link link-hover">Service</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">Why Car Doctor</a>
                    <a href="/" className="link link-hover">About</a>
                    <a href="/" className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a href="/" className="link link-hover">Support Center</a>
                    <a href="/" className="link link-hover">Feedback</a>
                    <a href="/" className="link link-hover">Accessibility</a>
                </div>
            </div>
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