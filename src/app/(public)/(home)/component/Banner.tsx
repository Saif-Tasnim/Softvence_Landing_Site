import { PrimaryButton } from '@/components/shared';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-[120vh] flex items-center px-5'>
            <div className='w-1/2 z-20 flex flex-col justify-center items-start'>
                <h1 className='text-6xl font-extrabold text-primary'>
                    Florida and Texas <br />
                    Hard Money Lenders
                </h1>
                <p className='text-3xl text-gray-400 mt-5 font-semibold pb-14'>
                    Fast Closing Fix and Flip and Rental Loans <br /> For Your
                    Investment Properties.
                </p>

                <PrimaryButton content='get approved online' />
            </div>

            <div className='h-full mt-28'>
                <Image
                    src='/banner.png'
                    alt='Banner Image'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
    );
};

export default Banner;
