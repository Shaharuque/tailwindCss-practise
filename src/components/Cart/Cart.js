import React from 'react';

const Cart = (props) => {
    const { cart, removeCartItem } = props
    //console.log(cart)
    // let totalSelected=0
    // for(let cartItem of cart){
    //     totalSelected=totalSelected+ cartItem.quantity
    // }

    //condition rendering in 4 ways(this is important to know)
    //1. Element varible
    let command
    if (cart.length === 0)
        command = <p className='font-mono text-white'>plz add atlest one Item..!!</p>
    else if (cart.length === 1) {
        command = <p className='font-mono text-white'>Want to add ...</p>
    }
    else {
        command = <p className='font-mono text-white'>Thanks for adding items</p>
    }
    //2. ternary operator

    //3. add condition means condition only true holey kicho ekta dekhabo otherwise na this is called '&& operator'/short hand technique
    //4.|| operator this means || ar left side/condition jodi false hoy tahley || ar right side ta execute hobey otherwise nothing


    return (
        <div className='p-6 flex flex-col items-center '>
            <h1>Added Products in Cart: {cart.length}</h1>
            {
                cart.map(item => <p key={item.id}>{item.name.length > 20 ? item.name.slice(0, 10) + '...' : item.name}
                    <button onClick={() => removeCartItem(item)} className='rounded bg-slate-500 px-4 m-4 text-white'>
                        X
                    </button>
                </p>
                )
            }

            {command}
            {/*2. using ternary doing conditional rendering*/}
            {cart.length > 4 ? <button className='bg-purple-600 p-2 rounded text-white mt-4'>Check Out</button> : <p className='text-mono text-gray-600'>Keep on adding</p>}
            {/*3. add condition means condition only true holey kicho ekta dekhabo otherwise na */}
            {cart.length >= 5 &&
                <div className='bg-sky-500 mt-4'>
                    <p className='font-thin text-white p-4'>Wow you already add 5 items means you deserve some discount....</p>
                </div>}
            {/* 4.|| operator this means || ar left side/condition jodi false hoy tahley || ar right side ta execute hobey otherwise nothing*/}
            {cart.length===0 || 
                <div>
                    <p className='text-center mt-4 font-serif text-red-800 font-semibold'>Bravooo keep scrolling products u gonna love it :-)</p>
                </div>}    
        </div>
    );
};

export default Cart;