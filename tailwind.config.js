/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/component/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '0.5rem',
                md: '2.5rem'
            }
        },
        extend: {
            screens: {
                '3xl': '1920px'
            },
            fontFamily: {
                Futura: ['Futura']
            },
            colors: {
            }
        }
    },
    plugins: []
};
