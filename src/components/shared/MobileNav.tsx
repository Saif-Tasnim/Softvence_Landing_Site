'use client';
import { NAV } from '@/static/nav';
import Link from 'next/link';
import React from 'react';

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
    const sideBar = isOpen ? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div
            className={`${sideBar} w-4/5 md:w-3/5 h-full fixed flex flex-col justify-center space-y-6 z-[1050]  transform transition-all duration-500 bg-primary text-white`}
        >
            {NAV.map((nav) => (
                <Link
                    href={nav.path}
                    key={nav.id}
                    className='w-fit text-xl font-medium ml-5 pb-2 border-b-2 border-gray-300'
                >
                    {nav.title}
                </Link>
            ))}
        </div>
    );
};

export default MobileNav;
