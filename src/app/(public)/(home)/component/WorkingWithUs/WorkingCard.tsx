import Image from 'next/image';
import React from 'react';
interface IWorkingCardProps {
    title: string;
    description: string;
    image: string;
}
const WorkingCard = ({ title, description, image }: IWorkingCardProps) => {
    return (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-12'>
            <Image src={image} alt={title} width={500} height={300} className='w-12 h-10'/>
            <h2 className='text-2xl font-semibold text-center text-primary'>{title}</h2>
            <p className='mt-4 text-center'>{description}</p>

           <div className='flex justify-center items-center mt-9'>
             <button className='mt-4 px-8 py-5 border border-primary text-primary rounded-2xl'>
                Find a Home
            </button>
          
           </div>
        </div>
    );
};

export default WorkingCard;
