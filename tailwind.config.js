/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur primaire - Orange vif (identité de marque)
        primary: {
          DEFAULT: '#E15D0B', // Orange exact du logo HAUT EN COULEUR
          light: '#FF7A29',   // Variante plus claire
          dark: '#B84A08',    // Variante plus foncée
        },
        // Couleurs secondaires - Palette Caméléon
        cameleon: {
          // Verts
          'turquoise': '#00D4AA',     // Turquoise vif
          'emerald': '#00C896',       // Émeraude
          'lime': '#76FF03',          // Vert lime éclatant
          // Bleus
          'cyan': '#00E5FF',          // Cyan lumineux
          'blue': '#2979FF',          // Bleu profond
          'blue-light': '#448AFF',    // Bleu clair
          // Rouges/Oranges
          'red': '#FF1744',           // Rouge saturé
          'orange': '#FF6D00',        // Orange saturé
          // Jaunes
          'yellow': '#FFD600',        // Jaune vif
          'yellow-light': '#FFEA00',  // Jaune lumineux
        },
        // Anciens alias pour compatibilité
        turquoise: {
          DEFAULT: '#00D4AA',
          light: '#00E5FF',
        },
        lime: {
          DEFAULT: '#76FF03',
          dark: '#64DD17',
        },
        // Couleurs d'accent (conservées)
        accent: {
          red: '#FF1744',
          'red-pink': '#F50057',
          yellow: '#FFD600',
          'yellow-light': '#FFEA00',
          blue: '#2979FF',
          'blue-light': '#448AFF',
        },
        // Fonds - Noir profond du logo
        dark: {
          DEFAULT: '#000000',  // Noir pur du logo
          elevated: '#0A0A0A',
          'elevated-2': '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}