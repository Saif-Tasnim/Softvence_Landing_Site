import React from 'react';

const PrimaryButton = ({content}: {content:string}) => {
    return (
        <button className='bg-primary text-white font-semibold py-5 px-8 rounded-lg hover:bg-gray-300 hover:text-gray-300 transition-colors duration-200 flex items-center justify-center gap-3'>
            {content}
        </button>
    );
};

export default PrimaryButton;