/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      smm:'300px',
      sm:'480px',
      smp:'622px',
      md:'800px',
      rentBreak:'1110px',
      ImageBreak:'1060px',
      lg:'966px',
      xl:'1200px',
      renn:'1280px',
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
        footer:'rgba(250, 250, 250, 1)',
        renr5th:'hsla(0, 0%, 0%, 0.7)',
      },
      fontSize:{
        head:['50px','34px'],
        textBox:['15px','18px'],
        medButton:['15px','17.58px'],
        rentNav:['15px','30px'],
        explore:['30px','30px'],
        listHead:['28px','30px'],
        propLoc:['14px','16.8px'],
        propOfTheProp:['12px','14.4px'],
        price:['18px','21.6px'],
        footerHeader:['22px', '26px'],
        footerBase:['20px','24px'],
        signUp:['50px','60px'],
        signUpLabel:['16px','19.2px'],
        Home:['40px','30px'],

  
      },
      borderRadius:{
        meddButton:'10px',
        listRound:'20px',
      },
      boxShadow:{
        card:'0px 0px 60px 0px rgba(0, 0, 0, 0.1)',
      },
      height:{
        redlo:'14px',
        bgprim:'448px',
      },
      padding:{
        '1.5':'1.5px'
      },
      width:{
        '360':'360px',
        propImage:'270px',
        '40/100' :'40%',
        '20/100' :'20%',
        
      },
     height:{
      '800':'803px'
     }
      
      
  },
  },
  plugins: [require('daisyui')],
}
