// Configuration for Tailwind
// See https://tailwindcss.com/docs/guides/create-react-app
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        fontFamily: {
            regular: ['"FS Elliot Pro Regular"'],
            bold: ['"FS Elliot Pro Bold"'],
        },
        colors: {
            blue: {
                light: '#E9F0F7',
                DEFAULT: '#5492C6',
                dark: '#1352AB',
                status: '#4288CB',
            },
            red: '#D62F5C',
            yellow: '#D6A80C',
            green: '#6E9D45',
            gray: {
                status: '#B5C0D2',
                dark: '#3D4E5D',
            },
            black: colors.black,
            white: colors.white,
        },
        container: {
            center: true,
            padding: '2em',
        },
        extend: {
            colors: {
                display: '#070707',
                normal: '#222222',
                'gray-1': '#AFAFAF',
                'gray-2': '#6F8191',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
