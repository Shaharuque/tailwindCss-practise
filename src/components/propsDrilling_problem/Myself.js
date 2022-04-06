import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Random from '../propsDrilling_problem/Random';


const Myself = () => {
    const [house, setHouse]=useContext(RingContext)  // context api ar use

    return (
        <div className='border-4 border-purple-600 m-4'>
            <h1>My house:{house}</h1>
            <div className='border-4 border-yellow-600 m-4'>
    {/*<p>Special:{specialGift}</p>*/}
            <button className='bg-red-200 p-1 m-2' onClick={()=>setHouse(house+1)}>Increase</button>
            </div>
            <Random ></Random>
        </div>
    );
};

export default Myself;