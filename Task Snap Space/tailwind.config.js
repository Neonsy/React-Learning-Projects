/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // Custom font CSS set to InterVariable if supported
        fontFamily: { sans: ['Inter', 'sans-serif'] },
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            colors: {
                todo: '#0284C7',
                inProgress: '#2563EB',
                completed: '#4F46E5',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
