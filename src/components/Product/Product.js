import React from 'react';

const Product = (props) => {
    const {product,addToCart}=props
    const {name,img,price}=product
    return (
        <div className='flex flex-col items-center p-6'>
            <img className='w-1/4 rounded-lg shadow-lg border-cyan-400' src={img} alt="" />
            <h1 className='font-bold text-rose-600 mt-4'>{name}</h1>
            <p>Price: ${price}</p>
            <button onClick={()=>addToCart(product)} className='bg-teal-600 p-2 mt-4 rounded-lg text-white'>Add to Cart</button>
        </div>
    );
};

export default Product;