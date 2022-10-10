import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuize from './SingleQuize';

const Quize = () => {
    const quizes = useLoaderData();
    

    return (
        <div>
           <div className="">
             {
                quizes.data.questions.map(quize=><SingleQuize key={quize.id} 
                quize={quize}></SingleQuize>)
            }
           </div>
        </div>
    );
};

export default Quize;