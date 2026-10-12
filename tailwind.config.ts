import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#080910', panel: '#10111b', violet: '#8b5cf6', electric: '#4f8cff' }, boxShadow: { glow: '0 0 50px rgba(139,92,246,.18)' } } }, plugins: [] };
export default config;
