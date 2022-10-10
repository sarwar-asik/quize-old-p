import React from 'react';
import './HeaderSection.css';

const HeaderSection = () => {
    return (
        <div className='header-containers text-light text-center shadow-lg bg-info py-5 my-5  bg-opacity-100'>
            <h2>Welcome To Our Test </h2>
            <img className='w-75 h-75 rounded' src="https://as2.ftcdn.net/v2/jpg/02/87/30/87/1000_F_287308723_jmTWffM5nWqXGerXLDeVKPVaKOEl0S2a.jpg" alt="" />
            <h3 className='text-muted fs-1'>You can Test YourSelf</h3>
            <p>This is Online Test Site . We Giving you opurtunity for test yourself by particifated Quize .<br></br> You can Choice Your Course for participate quize. </p>
        </div>
    );
};

export default HeaderSection;