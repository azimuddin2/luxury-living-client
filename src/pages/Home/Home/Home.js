import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;