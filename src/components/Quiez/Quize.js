import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuize from './SingleQuize';

const Quize = () => {
    const quizes = useLoaderData();
    const {total,id,name,logo,questions} =quizes.data

    return (
        <div className=''>
            <div className="text-center">

            <h1>Topics-{id} : {name}</h1>
            <img className='img-fluid' src={logo} alt="" />
            <h3>Total Questions : {total}</h3>
            

            </div>
           <div className="p-5">
             {
                questions.map(quize=><SingleQuize key={quize.id} 
                quize={quize}></SingleQuize>)
            }
           </div>
        </div>
    );
};

export default Quize;