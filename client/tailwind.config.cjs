/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                Prompt: ['Prompt', 'sans-serif'],
            },
            colors: {
                primary: '#534fff',
                secondary: '#c1bffd',
                tertiary: '#ccf888',
                black: '#182122',
            },
            screens: {
                xsm: '370px',
                '1xsm': '550px',
                '3xl': '1650px',
            },
        },
    },
    plugins: [],
};
