/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur primaire - Orange vif
        primary: {
          DEFAULT: '#d86a0c',
          light: '#f07d15',
          dark: '#b85609',
        },
        // Couleurs secondaires - Caméléon
        turquoise: {
          DEFAULT: '#00b8d4',
          light: '#18ffff',
        },
        lime: {
          DEFAULT: '#76ff03',
          dark: '#64dd17',
        },
        // Couleurs d'accent
        accent: {
          red: '#ff1744',
          'red-pink': '#f50057',
          yellow: '#ffd600',
          'yellow-light': '#ffea00',
          blue: '#2979ff',
          'blue-light': '#448aff',
        },
        // Fonds
        dark: {
          DEFAULT: '#0a0a0a',
          elevated: '#1a1a1a',
          'elevated-2': '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
}