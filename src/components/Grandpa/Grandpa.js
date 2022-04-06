import React, { useState } from 'react';
import Father from '../propsDrilling_problem/Father';



/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will you need to pass the contextName
 *  */ 

export const RingContext = React.createContext('ring'); //1,2,3
const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const increase = () => {
        setHouse(house + 1)
    }
    const specialGift = 'platinum-ring'
    const normalGift='matir ring'

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='border-4 border-red-900 rounded-lg'>
                <p className='text-red-400 text-2xl'>Grand pa's house:{house}</p>
                <button onClick={increase} className='bg-teal-400 rounded-lg p-2 mb-6'>Increase-House</button>
                <Father house={house} ></Father>
                
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;