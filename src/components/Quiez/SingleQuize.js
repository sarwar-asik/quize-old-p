import React from 'react';

const SingleQuize = ({quize}) => {
    const {question,options} =quize;
    return (
        <div className='bg-light shadow-lg  px-5 py-5 my-3 '>
            <h4 className='text-primary bg-info py-3 rounded my-2 px-5'>Questions: {question}?</h4>
            <ol className='row text-center'>
            
                {
                    options.map(option=><li className='col-12 col-md-6 col-md-6 fs-2 text-secondary m-1'>{option}</li>)
                }
            </ol>
        </div>
    );
};

export default SingleQuize;