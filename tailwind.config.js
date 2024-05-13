/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme:'fantasy'
    ,
    extend: {

/* font family */
fontFamily: {
  lato: "'lato','sans-serif'",
sedan:"'Sedan SC', 'serif'",
},
/* color */

colors:{

  white:'white',
  black:'black',
  gray:'gray'

},
/* font isze */

fontSize:{
  14:"14px",
16:'16px',
20:'20px'

}

    },
  },
  plugins: [
    require('daisyui'),
  ],
}