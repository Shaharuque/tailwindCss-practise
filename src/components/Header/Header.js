import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-between p-6 bg-purple-200'>
            <div>
                <Link to='/'>
                    <small className='text-sm font-serif font-bold text-white hover:text-sky-900'>eShop</small>
                </Link>
            </div>
            <div className='text-xl font-sherif font-semibold text-teal-500 flex'>
                <CustomLink className='mr-2' to='/'>Home</CustomLink>
                <CustomLink className='mr-2' to='/orders'>Orders</CustomLink>
                <CustomLink className='mr-2' to='/grandpa'>GrandPa</CustomLink>
                <CustomLink className='mr-2' to='/about'>About</CustomLink>
            </div>
        </nav>

    );
};

export default Header;