/** @type {import('tailwindcss').Config} */

// https://v3.tailwindcss.com/docs/theme#extending-the-default-theme　参照
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "brand-blue": "#11405d",
                "laravel-red": "#F05340",
                "vue-green": "#42b883",
            },
            spacing: {
                128: "32rem",
            },
            fontFamily: {
                sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
