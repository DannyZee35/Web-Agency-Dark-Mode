/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    fontSize:{
      "sm" : "16px",
      "vl" : "70px",
      "lg"  : "60px",
      "md":"36px"
    
    },
  
    extend: {
      colors:{
        blue: "#4E47FF",
        gray: "#8987A1",
        black:"#000",
        input:"#D6DDED",
        primary:"#F5F5F5",
        'custom-purple': '#5B54FF',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    backgroundImage: {
      gradientDiagonal: 'linear-gradient(to bottom right, #1C1C1C 0%, #050505 100%)',

    }
    
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: 'class'
}