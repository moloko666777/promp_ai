const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const containerQueries = require('@tailwindcss/container-queries');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./src/components/**/*.{html,js,jsx,ts,tsx}"
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontFamily: {
                pop: ["Poppins", 'sans-serif'],
                man: ["Manrope", 'sans-serif'],
            },
            colors: {
                'gray': {
                    '500': '#828282'
                },
                'alto': {
                    '500': '#D9D9D9'
                },
                'cod-gray': {
                    '500': '#0E0E0E'
                },
                'azure-radiance': {
                    '500': '#1D73F3'
                },
                'white': {
                    '500': '#ffffff'
                },
                'black': {
                    '500': '#000000'
                },
                'white-opacity': {
                    '0.6': 'rgba(255, 255, 255, 0.6)'
                }

            },
            // fontSize: {
            //     '2xs': ['0.625rem', {lineHeight: '0.75rem'}],
            //     '3xs': ['0.5rem', {lineHeight: '0.625rem'}],
            // },
            spacing: {
                '14px': '0.875rem',
                '34px': '2.125rem',
                '42px': '2.625rem',
                '55px': '3.438rem',
                '5.5': '1.375rem',
                '6.5': '1.625rem',
            },
            width: {
                '51px': '3.188rem',
            },
            height: {
                '51px': '3.188rem',
                '55px': '3.438rem',
            },
            // fontSize: {
            //     '22px': '1.375rem',
            //     '64px': '4rem',
            //     sm: '0.8rem',
            //     base: '1rem',
            //     xl: '1.25rem',
            //     '2xl': '1.563rem',
            //     '3xl': '1.953rem',
            //     '4xl': '2.441rem',
            //     '5xl': '3.052rem',
            // },
            fontWeight: {
                regular: 400,
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-out': 'fade-out 0.5s ease-out',
                'slide-in': 'slide-in 0.5s ease-out',
                'slide-out': 'slide-out 0.5s ease-out',
            },
            borderRadius: {
                '55': '3.438rem',
            },
            keyframes: {
                'fade-in': {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                'fade-out': {
                    '0%': {opacity: '1'},
                    '100%': {opacity: '0'},
                },
                'slide-in': {
                    '0%': {transform: 'translateY(100%)'},
                    '100%': {transform: 'translateY(0)'},
                },
                'slide-out': {
                    '0%': {transform: 'translateY(0)'},
                    '100%': {transform: 'translateY(100%)'},
                },
            },
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
            screens: {
                'xs': '475px',
                ...defaultTheme.screens,
            },
            zIndex: {
                '1': '1',
            },
            transitionProperty: {
                'menu': 'all 0.4s ease-out, background 1s ease-out',
            },
            backdropBlur: {
                '248px': '284px', // Кастомный blur
            },
            backgroundColor: {
                'black-rgba': 'rgba(5, 5, 5, 0.01)', // Кастомный фон
            },
        },
    },
    plugins: [
        typography,
        forms,
        containerQueries,
        plugin(function ({addUtilities}) {
            addUtilities({
                '.scrollbar-hide': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '.scrollbar-default': {
                    '-ms-overflow-style': 'auto',
                    'scrollbar-width': 'auto',
                    '&::-webkit-scrollbar': {
                        display: 'block',
                    },
                },
            });
        }),
    ],
};
