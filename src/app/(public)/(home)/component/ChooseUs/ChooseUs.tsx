import { PrimaryButton, SectionTitle } from '@/components/shared';
import { CHOOSE } from '@/static/choose';
import React from 'react';
import ChooseCard from './ChooseCard';

const ChooseUs = () => {
    return (
        <div className='py-[120px]'>
            <SectionTitle title='Why Choose Us' />
            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ml-7'>
                {CHOOSE.map((item) => (
                    <ChooseCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>

            <div className='flex justify-center items-center'>
                <PrimaryButton content='More about us' />
            </div>
        </div>
    );
};

export default ChooseUs;
