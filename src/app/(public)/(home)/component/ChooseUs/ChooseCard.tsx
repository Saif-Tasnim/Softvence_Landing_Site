import Image from 'next/image';
import React from 'react';
interface ChooseCardProps {
    title: string;
    description: string;
    icon: string;
}
const ChooseCard = ({ title, description, icon }: ChooseCardProps) => {
    return (
        <div className='relative border p-4 rounded-lg h-[330px] w-11/12'>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='text-gray-400 mt-5'>{description}</p>

            <div className='absolute bg-[#EEFFF5] rounded w-fit p-8 clip-angled bottom-0 left-0'>
                <Image
                    src={icon}
                    alt={title}
                    width={120}
                    height={120}
                    className='w-20 h-20 mb-2'
                />
            </div>

        </div>
    );
};

export default ChooseCard;
