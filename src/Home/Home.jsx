import React from 'react';
import Banner from '../componets/Banner/Banner';
import Section from './Section';
import Business from './pages/Business';

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <Section></Section>
        <Business></Business>
       </div>
    );
};

export default Home;