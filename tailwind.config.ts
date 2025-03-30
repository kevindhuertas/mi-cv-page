import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Azul marino principal (blue-800)
          light: '#3B82F6',   // Tonalidad más clara (blue-500)
          dark: '#1E3A8A',    // Tonalidad más oscura (blue-900)
        },
        secondary: {
          DEFAULT: '#6B7280', // Gris principal (gray-500)
          light: '#9CA3AF',   // Tonalidad más clara (gray-400)
          dark: '#4B5563',    // Tonalidad más oscura (gray-600)
        },
        // Colores para el modo oscuro
        darkMode: {
          primary: '#0C4A6E', // Azul oscuro para el modo oscuro
          secondary: '#2D3748', // Gris oscuro para el modo oscuro
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        sm: '0 0 4px rgba(0, 0, 0, 0.1)',      // Sombra pequeña y uniforme
        DEFAULT: '0 0 8px rgba(0, 0, 0, 0.1)', // Sombra predeterminada y uniforme
        md: '0 0 12px rgba(0, 0, 0, 0.1)',     // Sombra mediana y uniforme
        lg: '0 0 16px rgba(0, 0, 0, 0.1)',     // Sombra grande y uniforme
        xl: '0 0 20px rgba(0, 0, 0, 0.1)',     // Sombra extra grande y uniforme
        '2xl': '0 0 24px rgba(0, 0, 0, 0.1)',  // Sombra extra extra grande y uniforme
        '3xl': '0 0 30px rgba(0, 0, 0, 0.1)',  // Sombra extra extra grande y uniforme
        inner: 'inset 0 0 4px rgba(0, 0, 0, 0.06)', // Sombra interna (opcional)
        none: 'none',
      },
    },
  },
  plugins: [],
}
export default config
