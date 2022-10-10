import React from 'react';
import './Quize.css'

const SingleQuize = ({quize}) => {
    const {question,options} =quize;
    return (
        <div className='bg-light shadow-lg  px-5 py-5 my-3 '>
            <h4 className='text-primary bg-info py-3 rounded my-2 px-5'>Questions: {question}?</h4>
            <ol className='quize text-center'>
            
                {
                    options.map(option=><li className='fs-2 text-secondary m-1'>{option}</li>)
                }
            </ol>
        </div>
    );
};

export default SingleQuize;