/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
export default {
  content: [
        './resources/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
         "./resources/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
            colors: {
                danger: colors.rose,
                primary: colors.cyan,
                success: colors.green,
                warning: colors.yellow,
            },
    },
  },
  plugins: [
        forms,
        typography,
  ],
}

