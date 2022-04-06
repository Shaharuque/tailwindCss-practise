import React from 'react';
import Myself from './Myself';

const Father = ({house}) => {
    return (
        <div className='border-4 border-green-600 m-4'>
            <h1>Father's house:{house}</h1>
            <Myself  ></Myself>
        </div>
    );
};

export default Father;