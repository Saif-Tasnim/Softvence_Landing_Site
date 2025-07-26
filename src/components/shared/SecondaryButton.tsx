import React from 'react';
import { Icons } from '../core';

const SecondaryButton = ({ content }: { content: string }) => {
    return (
        <button
            className='bg-white text-primary font-semibold hover:bg-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center gap-4 uppercase h-[66px] pl-8 rounded-md text-nowrap'
            style={{
                clipPath: 'polygon(0 0, 100% 0, 93% 100%, 0% 100%)'
            }}
        >
            {content}

            {/* Angled green section */}
            <span className='relative bg-green-900 text-white px-6 py-5 flex items-center clip-angled m-1 rounded-md'>
                <Icons.RightArrowWhite size={20} />
                <Icons.RightArrowWhite size={20} />
            </span>
        </button>
    );
};

export default SecondaryButton;
