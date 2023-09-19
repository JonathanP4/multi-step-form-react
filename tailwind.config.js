/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "marine-blue": "hsl(213deg 96% 18% / <alpha-value>)",
                "purplish-blue": "hsl(243deg 100% 62% / <alpha-value>)",
                "pastel-blue": "hsl(228deg 100% 84% / <alpha-value>)",
                "light-blue": "hsl(206deg 94% 87% / <alpha-value>)",
                "strawberry-red": "hsl(354deg 84% 57% / <alpha-value>)",
                "cool-gray": "hsl(231deg 11% 63% / <alpha-value>)",
                "light-gray": "hsl(229deg 24% 87% / <alpha-value>)",
                magnolia: "hsl(217deg 100% 97% / <alpha-value>)",
                alabaster: "hsl(231deg 100% 99% / <alpha-value>)",
            },
            spacing: {
                md: "1.875rem",
                sm: "0.9375rem",
            },
        },
    },
    plugins: [],
};
