/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
    },
    plugins: [
        require('@tailwindcss/forms', {
            strategy: 'base', // only generate global styles
            strategy: 'class', // only generate classes
        }),
    ],
}
