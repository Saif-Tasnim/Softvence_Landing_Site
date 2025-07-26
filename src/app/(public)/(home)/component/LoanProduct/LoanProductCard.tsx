// import { Icons } from '@/components/core';
import { Icons } from '@/components/core';
import { PrimaryButton, SecondaryButton } from '@/components/shared';
import Image from 'next/image';
import React from 'react';

interface ILoandProductCardProps {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    features: {
        id: number;
        list: string;
    }[];
}

const LoanProductCard = ({
    id,
    image,
    title,
    subtitle,
    features
}: ILoandProductCardProps) => {
    const bg = id === 1 ? 'bg-primary' : 'bg-white';
    const text = id === 1 ? 'text-white' : 'text-primary';
    const imageBg = id === 1 ? 'bg-white' : 'bg-primary';

    return (
        <div
            className={`${bg} ${text} rounded-[20px] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-fit`}
        >
            {/* Icon Image */}
            <div
                className={`${imageBg} rounded-[20px] p-5 mb-4 text-center w-fit mx-auto`}
            >
                <Image
                    src={image}
                    alt='image'
                    width={32}
                    height={32}
                    className={`object-contain ${text}`}
                />
            </div>

            {/* Title */}
            <h3 className='text-[32px] font-semibold text-center pb-1 whitespace-nowrap'>
                {title}
            </h3>

            {/* Subtitle */}
            <p className='text-base leading-relaxed text-center whitespace-nowrap'>
                {subtitle}
            </p>

            {/* Features */}
            <ul className='space-y-3 py-5'>
                {features.map((feature) => (
                    <li
                        key={feature.id}
                        className={`flex items-start gap-2 text-sm ${text}`}
                    >
                        {id === 1 ? (
                            <Icons.CheckMarkWhite />
                        ) : (
                            <Icons.CheckMarkGreen />
                        )}
                        <span>{feature.list}</span>
                    </li>
                ))}
            </ul>
            {/* learn more */}
            <p className="flex items-center gap-3 py-5">
                <Icons.Information className={`${text}`} />{' '}
                <span className={`${text} underline`}>Learn More</span>
            </p>

            {/* Button */}
            {id === 1 ? (
                <SecondaryButton content='Get Approved Online' />
            ) : (
                <PrimaryButton content='Get Approved Online' />
            )}
        </div>
    );
};

export default LoanProductCard;
