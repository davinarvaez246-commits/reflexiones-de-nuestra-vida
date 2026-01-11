/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          pink: '#ff00c8',
          purple: '#9d00ff',
          green: '#00ff9d',
          yellow: '#faff00'
        },
        dark: {
          950: '#050517',
          900: '#0a0a23',
          800: '#121235',
          700: '#1a1a40'
        }
      },
      fontFamily: {
        future: ['Orbitron', 'sans-serif'],
        poetic: ['Cormorant Garamond', 'serif'],
        quote: ['Dancing Script', 'cursive']
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 20px rgba(0,243,255,0.5), 0 0 40px rgba(0,243,255,0.3)',
        'neon-pink': '0 0 5px #ff00c8, 0 0 20px rgba(255,0,200,0.5), 0 0 40px rgba(255,0,200,0.3)',
        'neon-purple': '0 0 5px #9d00ff, 0 0 20px rgba(157,0,255,0.5), 0 0 40px rgba(157,0,255,0.3)',
        'neon-green': '0 0 5px #00ff9d, 0 0 20px rgba(0,255,157,0.5), 0 0 40px rgba(0,255,157,0.3)',
        'neon-yellow': '0 0 5px #faff00, 0 0 20px rgba(250,255,0.5), 0 0 40px rgba(250,255,0.3)'
      },
      keyframes: {
        pulseNeon: {
          '0%,100%': { boxShadow: '0 0 5px #00f3ff, 0 0 20px rgba(0,243,255,0.5)' },
          '50%': { boxShadow: '0 0 15px #00f3ff, 0 0 40px rgba(0,243,255,0.8)' }
        },
        glowText: {
          '0%,100%': { textShadow: '0 0 5px currentColor, 0 0 20px currentColor' },
          '50%': { textShadow: '0 0 15px currentColor, 0 0 40px currentColor' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        flicker: {
          '0%,19.999%,22%,62.999%,64%,64.999%,70%,100%': { opacity: 1 },
          '20%,21.999%,63%,63.999%,65%,69.999%': { opacity: 0.3 }
        }
      },
      animation: {
        pulseNeon: 'pulseNeon 4s ease-in-out infinite',
        glowText: 'glowText 3s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        flicker: 'flicker 8s linear infinite'
      }
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: []
          }
