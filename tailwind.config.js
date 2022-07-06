/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      smm:'300px',
      sm:'480px',
      md:'800px',
      lg:'976px',
      xl:'1200px',
      xxl:"1440px",
    },
    
    extend: {},
  },
  plugins: [require('daisyui')],
}
