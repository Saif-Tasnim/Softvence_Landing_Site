import React from 'react';
import Link from 'next/link';
import { NAV } from '@/static/nav';
import { Icons } from '../core';

interface INavBarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const NavBar = ({ isOpen, toggleMenu }: INavBarProps) => {
    return (
        <div className='fixed h-24 w-full transition-all duration-200'>
            <div className='flex h-full justify-around items-center w-full bg-slate-50'>
                <h1 className='uppercase text-3xl lg:text-[40px] font-bold'>
                    <span className='text-primary'>Ridge </span>
                    <span className='text-gray-300'>Street </span>
                </h1>

                <div className='lg:flex items-center gap-8 hidden'>
                    {NAV.map((item) => (
                        <Link
                            key={item.id}
                            href={item.path}
                            className='group text-center inline-block font-medium text-xl text-gray-400 hover:text-primary transition-colors duration-200'
                        >
                            {item.title}
                            <div className='w-6 h-0.5 bg-primary mx-auto mt-2 opacity-0 -translate-x-[100%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500' />
                        </Link>
                    ))}
                    <button className='bg-primary uppercase px-8 py-5 text-white font-semibold rounded-lg hover:bg-secondary transition-colors duration-200'>
                        Get Approved Online{' '}
                    </button>
                </div>

                <button
                    className='lg:hidden text-3xl text-gray-500 hover:text-primary transition-colors duration-200'
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <Icons.X className='w-8 h-8 md:w-12 md:h-12' />
                    ) : (
                        <Icons.Menu className='w-8 h-8 md:w-12 md:h-12' />
                    )}
                </button>
            </div>
        </div>
    );
};

export default NavBar;
