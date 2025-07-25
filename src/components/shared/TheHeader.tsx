'use client';
import React, { useState } from 'react';
import NavBar from './NavBar';
import MobileNav from './MobileNav';

const TheHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='fixed h-20 w-full transition-all duration-200 z-[100]'>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <MobileNav isOpen={isOpen} />
        </header>
    );
};

export default TheHeader;
