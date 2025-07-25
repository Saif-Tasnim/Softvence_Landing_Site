'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFoundPage = () => {
    const router = useRouter();
    return (
        <Image
            src='/CodePen-404-Page.gif'
            alt='404.gif'
            height={800}
            width={1200}
            className='w-full h-screen cursor-pointer'
            onClick={() => router.push('/')}
        />
    );
};

export default NotFoundPage;
