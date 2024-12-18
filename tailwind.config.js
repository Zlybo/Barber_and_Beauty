/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./App.js",
        "./components/**/*.jsx",
        "./app/**/*.{js,jsx}",

    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            textColor: {
                "barber_yellow": "#fed60b",
                "barber_gray": "#7a7b7b",
            }
        },
    },
    plugins: [],
}