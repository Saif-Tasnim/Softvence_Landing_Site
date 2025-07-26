import { WORKING } from '@/static/working';
import React from 'react';
import WorkingCard from './WorkingCard';

const WorkingWithUs = () => {
    return (
        <div className='py-[120px]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[56px] font-extrabold mb-1 uppercase'>
                    Interested In Working With Us?
                </h1>
                <p className='text-lg text-center max-w-2xl'>
                    We work with real estate investors across the country every
                    day. How can we help?
                </p>
            </div>

            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {WORKING.map((item) => (
                    <WorkingCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};



export default WorkingWithUs;
