import { Icons } from '@/components/core';
import Image from 'next/image';
import React from 'react';
interface IProjectCardProps {
    project: {
        id: number;
        title: string;
        address: string;
        image: string;
        feet: number;
        bed: number;
        garages: number;
        bath: number;
        loan: string;
        rate: number;
        LTV: number;
        term: number;
        price: string;
    };
}
const ProjectCard = ({ project }: IProjectCardProps) => {
    return (
        <div className='max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200'>
            <div className='relative'>
                <Image
                    src={project.image}
                    alt='Property Image'
                    width={1000}
                    height={1000}
                    className='w-full h-64 object-cover'
                />
            </div>

            <div className='px-6 py-4'>
                <h1 className='text-center text-2xl font-semibold text-primary'>
                    {project.title}
                </h1>
                <p className='text-gray-400 flex items-center gap-0.5 justify-center'>
                    <Icons.Map /> <span>{project.address}</span>
                </p>

                <hr className='my-5 w-full h-0.5 bg-[#DCDCDC]' />

                <div className='grid grid-cols-2 mt-4 text-sm text-gray-700'>
                    <div className='flex gap-3 items-center justify-start'>
                        <Icons.Feet /> <span>{project.feet} Square Feet</span>
                    </div>
                    <div className='flex gap-3 items-center ml-7'>
                        <Icons.Car /> <span>{project.garages} Garages</span>
                    </div>
                    <div className='flex gap-3 items-center justify-start'>
                        <Icons.Bed /> <span>{project.bed} Bedrooms</span>
                    </div>
                    <div className='flex gap-3 items-center justify-center'>
                        <Icons.Bath /> <span>{project.bath} Bathrooms</span>
                    </div>
                </div>

                <hr className='my-5 w-full h-0.5 bg-[#DCDCDC]' />

                <ul className='tgrid grid-cols-2 mt-4 text-sm text-gray-700 list-disc'>
                    <div className='flex justify-between items-center'>
                        <li className='py-2'>
                            <span>Loan Amount:</span>
                            <span className='font-semibold'>
                                ${project.loan}
                            </span>
                        </li>
                        <li className='py-2'>
                            <span>LTV:</span>
                            <span className='font-semibold'>
                                {project.LTV}%
                            </span>
                        </li>
                    </div>

                    <div className='flex justify-between items-center'>
                        <li className='py-2'>
                            <span>Rate:</span>
                            <span className='font-semibold'>
                                {project.rate}%
                            </span>
                        </li>

                        <li className='py-2'>
                            <span>Term:</span>
                            <span className='font-semibold'>
                                {project.term} Months
                            </span>
                        </li>
                    </div>
                </ul>

                <div className='mt-5'>
                    <button className='w-full bg-primary text-white py-3 font-bold text-xl'>
                        ${project.price}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
