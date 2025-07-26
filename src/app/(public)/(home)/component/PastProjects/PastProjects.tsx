import { PROJECTS } from '@/static/project';
import React from 'react';
import ProjectCard from './ProjectCard';

const PastProjects = () => {
    return (
        <div className='py-[120px] bg-primary text-white'>
            <h1 className='font-extrabold text-[56px] uppercase mb-5 mx-5'>
                past projects{' '}
            </h1>
            <p className='text-2xl ml-5'>
                A Proven Track Record Funding Projects Like These
            </p>

            <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default PastProjects;
