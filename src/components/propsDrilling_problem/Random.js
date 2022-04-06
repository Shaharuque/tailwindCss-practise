import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Random = () => {
    const  [house, setHouse]=useContext(RingContext) 
    return (
        <div className='border-4 border-black m-4'>
            <p>random house;{house}</p>
           {/* <h1>random-special:{normalGift}</h1>*/}
           <button className='bg-red-200 p-1 m-2' onClick={()=>setHouse(house+1)}>Increase by random</button>
        </div>
    );
};

export default Random;