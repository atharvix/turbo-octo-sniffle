/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lucknow: {
                    ivory: '#FFFFF0',
                    cream: '#FFFDD0',
                    'off-white': '#F8F8FF',
                    'pastel-pink': '#FFD1DC',
                    'pista-green': '#D1E8D1', // Pistachio
                    'sky-blue': '#E0FFFF',
                    'faded-maroon': '#C08081',
                    gold: '#C5A059', // Softer, more antique/thread-like gold
                    sand: '#F4E4BC',
                },
            },
            fontFamily: {
                cormorant: ['"Cormorant Garamond"', 'serif'],
                cinzel: ['Cinzel', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'soft-glow': '0 0 15px rgba(255, 209, 220, 0.3)',
                'gold-line': '0 1px 0 rgba(197, 160, 89, 0.2)',
            },
            animation: {
                'sway': 'sway 8s ease-in-out infinite',
                'drift': 'drift 20s linear infinite',
                'sunlight': 'sunlight 10s ease-in-out infinite',
            },
            keyframes: {
                sway: {
                    '0%, 100%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                },
                drift: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(-20px, -20px)' },
                },
                sunlight: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '0.8' },
                },
            },
        },
    },
    plugins: [],
}
