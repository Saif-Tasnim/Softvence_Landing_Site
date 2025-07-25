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
                primary: {
                    25: '#E9EFFBE8',
                    50: '#EFE6F8',
                    100: '#DFCCF1',
                    200: '#D0B3EA',
                    300: '#C099E3',
                    400: '#B080DC',
                    500: '#A066D5',
                    600: '#904DCE',
                    700: '#8133C7',
                    800: '#711AC0',
                    900: '#6100B9'
                },
                gray: {
                    25: '#FBFBFB',
                    50: '#E6E7E8',
                    100: '#CDD0D1',
                    200: '#B4B8BA',
                    300: '#9BA0A3',
                    400: '#82898C',
                    500: '#687174',
                    600: '#4F595D',
                    700: '#364146',
                    800: '#1D2A2F',
                    900: '#041218',
                    950: '#130025'
                },
                fuchsia: {
                    50: '#FFE9FF',
                    100: '#FED2FE',
                    200: '#FEBCFE',
                    300: '#FEA5FE',
                    400: '#FE8FFE',
                    500: '#FD78FD',
                    600: '#FD62FD',
                    700: '#FD4BFD',
                    800: '#FC35FC',
                    900: '#FC1EFC',
                    950: '#FBECFEE8'
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
                primary: ['var(--font-be-vietnam-pro)']
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
