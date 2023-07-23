/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html',],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (max-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      'author' : {
        fontweight: 'bold',
        color: 'red',
      },
      backgroundImage: {
        'hero-desktop': "url('/assets/images/bg-intro-desktop.svg')",
        'hero-mobile': "url('/assets/images/bg-intro-mobile.svg')",
        // 'button': "linear-gradient(to right,"
      },

     
    },
  },
  plugins: [],
}

