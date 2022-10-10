import React from 'react';

const SingleQuize = ({quize}) => {
    const {question,options} =quize;
    return (
        <div>
            <h4>{question}</h4>
            <h2>{options}</h2>
        </div>
    );
};

export default SingleQuize;