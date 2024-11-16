module.exports = {
    theme: {
      extend: {
        keyframes: {
          colorChange: {
            '0%, 100%': { color: '#000000' }, // Start and end color (black)
            '50%': { color: '#2c7a7b' }, // Midpoint color (green)
          },
        },
        animation: {
          colorChange: 'colorChange 3s ease-in-out infinite',
        },
      },
    },
  };
  