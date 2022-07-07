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
    
    extend: {
      colors:{
        crimson : 'hsla(357, 82%, 39%, 1)',
        crimsonHover:'hsla(357, 82%, 39%,0.6 )',
        rreed:'hsla(357, 82%, 39%, .3)',
        darkGray:'hsla(0, 0%, 38%, 1)',
        lightGray:'hsla(0, 0%, 96%, 1)',
        middleGray:'hsla(240, 2%, 64%, 1)',
      },
      fontSize:{
        head:['50px','34px'],
        textBox:['15px','18px'],
        medButton:['15px','17.58px'],
  
      },
      borderRadius:{
        meddButton:'10px',
      }
  },
  },
  plugins: [require('daisyui')],
}
