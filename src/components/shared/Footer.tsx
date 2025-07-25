import React from 'react';
import { Icons } from '../core';

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 pt-24 pb-10 bg-primary text-white font-normal'>
            {/* Company */}
            <div>
                <h3 className='font-bold mb-4 text-2xl'>Company</h3>
                <ul className='space-y-2'>
                    <li>About</li>
                    <li>Fix And Flip Loans</li>
                    <li>DSCR Rental Loans</li>
                    <li>Ground Up Construction Loans</li>
                </ul>
                <h4 className='font-semibold mt-6 mb-2 text-2xl'>Where We Lend</h4>
                <ul className='space-y-1'>
                    <li>Florida</li>
                    <li>Texas</li>
                    <li>Georgia</li>
                </ul>
            </div>
            {/* Top Cities */}
            <div>
                <h3 className='font-bold mb-4 text-2xl'>Top Cities We Lend In</h3>
                <ul className='space-y-2'>
                    <li>Orlando</li>
                    <li>Tampa</li>
                    <li>Miami</li>
                    <li>Jacksonville</li>
                    <li>Houston</li>
                    <li>Austin</li>
                    <li>Dallas</li>
                    <li>San Antonio</li>
                </ul>
            </div>
            {/* Top Resources */}
            <div>
                <h3 className='font-bold mb-4 text-2xl'>Top Resources</h3>
                <ul className='space-y-2'>
                    <li>Loan Calculator</li>
                    <li>What is a Hard Money Loan</li>
                    <li>How to find fix and flip deals</li>
                    <li>Best Cities for Fix and Flips</li>
                </ul>
                <h4 className='font-bold mb-2 text-2xl mt-6'>Useful Link</h4>
                <ul className='space-y-1'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            {/* Contact Us */}
            <div>
                <h3 className='font-bold mb-4'>Contact Us</h3>
                <ul className='space-y-2'>
                    <p>Email</p>
                    <li className='flex items-center gap-2'>
                        <span className='font-semibold'> <Icons.Mail /> </span>{' '}
                        loans@ridgestreetcap.com
                    </li>
                    <li>
                        <span className='font-semibold'>Direct/Text:</span>
                        <br />
                        <span className='flex items-center gap-2'>
                            <svg
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='inline'
                            >
                                <circle cx='8' cy='8' r='8' />
                            </svg>
                            Phone: 786-304-2751
                        </span>
                    </li>
                </ul>
                <div className='mt-6 mb-4'>
                    <span className='inline-block bg-white text-primary font-bold px-4 py-2 rounded'>
                        RIDGE STREET
                    </span>
                </div>
                <div className='flex gap-4 text-xl'>
                    {/* Social Icons (use your own SVGs or icon library) */}
                    <a href='#' aria-label='Facebook'>
                        <svg width='20' height='20' fill='currentColor'>
                            <path d='M8 20V12H5v-3h3V6.5C8 3.5 9.5 2 12 2h3v3h-2c-1 0-1 .5-1 1V9h3l-1 3h-2v8H8z' />
                        </svg>
                    </a>
                    <a href='#' aria-label='Instagram'>
                        <svg width='20' height='20' fill='currentColor'>
                            <circle cx='10' cy='10' r='7' />
                            <circle cx='10' cy='10' r='3' />
                        </svg>
                    </a>
                    <a href='#' aria-label='Twitter'>
                        <svg width='20' height='20' fill='currentColor'>
                            <path d='M20 4a8.1 8.1 0 01-2.36.65A4.13 4.13 0 0019.44 2a8.19 8.19 0 01-2.6 1A4.1 4.1 0 009.85 7.03a11.65 11.65 0 01-8.46-4.29s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.1 4.1 0 00-.08-.83A7.72 7.72 0 0020 4z' />
                        </svg>
                    </a>
                    <a href='#' aria-label='LinkedIn'>
                        <svg width='20' height='20' fill='currentColor'>
                            <rect x='2' y='2' width='16' height='16' rx='2' />
                            <rect x='6' y='8' width='2' height='6' />
                            <rect x='12' y='8' width='2' height='6' />
                            <circle cx='7' cy='6' r='1' />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
