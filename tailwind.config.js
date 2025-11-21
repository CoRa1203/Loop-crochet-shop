/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
        // Основной шрифт (для body, параграфов и т.д.)
        sans: ['var(--font-lora-sans)', 'sans-serif'],
        
        // Шрифт для заголовков
        heading: ['var(--font-caveat-sans)', 'serif'],
      },},
  },
  plugins: [],
}

