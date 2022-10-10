import React from 'react';
import Course from '../Course/Course';
import HeaderSection from '../headerSection/HeaderSection';
import './Home.css'

const Home = () => {
    return (
        <div className='home-containers'>
            <HeaderSection></HeaderSection>
            <Course></Course>
        </div>
    );
};

export default Home;