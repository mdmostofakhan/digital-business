import React from 'react';
import Banner from '../componets/Banner/Banner';
import Section from './Section';
import Business from './pages/Business';
import SectionTow from './pages/SectionTow';
import BusinessTow from './pages/BusinessTow';
import NewsSection from './pages/NewsSection';

const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <Section></Section>
        <Business></Business>
        <SectionTow></SectionTow>
        <BusinessTow></BusinessTow>
         <NewsSection></NewsSection>
       </div>
    );
};

export default Home;