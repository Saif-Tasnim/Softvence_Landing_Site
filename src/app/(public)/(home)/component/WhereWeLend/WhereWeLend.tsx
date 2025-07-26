import { SecondaryButton } from '@/components/shared';
import Image from 'next/image';
import React from 'react';

const WhereWeLend = () => {
    return (
        <div className='py-[120px] container bg-primary text-white'>
            <div>
                <h1 className='font-extrabold text-[56px] uppercase mb-5'>
                    Where We Lend
                </h1>
                <p className='text-2xl'>
                    Ridge Street provides hard money loans to real estate
                    investors in 35 states.
                </p>
                <p className='text-2xl'>
                    We focus our efforts in
                    <span className='font-extrabold text-3xl'>Texas</span> and
                    <span className='font-extrabold text-3xl'> Florida</span>.
                </p>
            </div>
            <div className='flex justify-center items-center py-20'>
                <Image
                    src='/map.png'
                    alt='Map'
                    width={1170}
                    height={600}
                    className='h-full w-auto'
                />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center py-20 gap-20'>
                <Image
                    src='/texas.png'
                    alt='Map'
                    width={440}
                    height={560}
                    className='h-full w-auto cursor-pointer'
                />

                <Image
                    src='/florida.png'
                    alt='Map'
                    width={440}
                    height={560}
                    className='h-full w-auto cursor-pointer'
                />
            </div>

            <div className='flex justify-center items-center'>
                <SecondaryButton content='View All locations' />
            </div>
        </div>
    );
};

export default WhereWeLend;
