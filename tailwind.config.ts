import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
            marquee: 'marquee var(--duration) infinite linear',
            'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			},
            marquee: {
                from: {
                    transform: 'translateX(0)'
                },
                to: {
                    transform: 'translateX(calc(-100% - var(--gap)))'
                }
            },
            'marquee-vertical': {
                from: {
                    transform: 'translateY(0)'
                },
                to: {
                    transform: 'translateY(calc(-100% - var(--gap)))'
                }
            }
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
