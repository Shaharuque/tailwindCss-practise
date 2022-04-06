import React, { useState } from 'react';
import { useProducts } from '../../customHooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



const Home = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])


    const addToCart = (clickedProduct) => {
        //console.log(product)
        let clickedItems
        const alreadyExistInCart = cart.find(product => product.id === clickedProduct.id)
        if (!alreadyExistInCart) {
            clickedProduct.quantity = 1
            clickedItems = [...cart, clickedProduct]
        }
        else {
            const restProduct = cart.filter(product => product.id !== clickedProduct.id)
            alreadyExistInCart.quantity += 1
            clickedItems = [...restProduct, alreadyExistInCart]
        }
        setCart(clickedItems)
    }

    //for removing item from cart
    const removeCartItem=(item)=>{
        //console.log(item)
        //jei item ta delete korbo shei item badh a cart ar baki product gula cart a set korbo
        const restItems=cart.filter(product=>product.id!==item.id)
        setCart(restItems)
    }
    return (
        <div className='grid grid-cols-[3fr,1fr] '>
            <div className='grid md:grid-cols-2 gap-2 p-8'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='bg-teal-600 rounded'>
                <Cart cart={cart} removeCartItem={removeCartItem}></Cart>
            </div>
        </div>
    );
};

export default Home;