/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'hero-pattern': "url('/images/banner.png')",
            'footer-texture': "url('/img/footer-texture.png')",
          }
      },
    },
    plugins: [],
  }