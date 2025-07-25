/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                white: '#ffffff',
                primary: "#165831",
                gray: {
                    25: '#FBFBFB',
                    50: '#E6E7E8',
                    100: '#CDD0D1',
                    200: '#B4B8BA',
                    300: '#949293',
                    400: '#343434',
                    500: '#687174',
                    600: '#4F595D',
                    700: '#364146',
                    800: '#1D2A2F',
                    900: '#041218',
                    950: '#130025'
                },
                
                success: '#097400',
                sucesslight: '#D1FFBB',
                sucessdeep: '#096C00',
                pending: '#6D5C00',
                pendinglight: '#FFF6A8',
                overdue: '#8F0000',
                overduelight: '#FFC7C7',
                error: '#950000',
                warning: '#ffbb33',
                warninglight: '#FF000026',
                yellowstone: '#04D300',
                yellowlight: '#14FF0026',
                info: '#27B8F5',
                infolight: '#3DBFF6'
            },
            fontFamily: {
                primary: ['var(--font-inter)']
            },
            boxShadow: {
                base: '0px 24px 60px 0px rgba(21, 24, 38, 0.15)'
            },
            background: {
                'gradient-v1':
                    'linear-gradient(104.7deg, rgba(233, 239, 251, 0.91) -22.47%, rgba(251, 236, 254, 0.91) 103.83%)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
