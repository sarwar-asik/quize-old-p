import React from 'react';
import './SingleCourse.css'

const SingleCours = ({course}) => {
    const {name,id,logo,total} =course;
    return (
        <div className='single-course bg-secondary text-center  text-light p-5 m-2 rounded'>
            <h1>Test yourself with<br></br> <i>{name}</i></h1>
            <img className='course-img' src={logo} alt="" />
            <h4>Total Number {total}</h4>
        <button className='btn btn-warning btn-outline-danger fs-3 text-muted border border-none'>Go Test </button>
            
        </div>
    );
};

export default SingleCours;