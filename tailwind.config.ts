import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				rosegold: {
					50: '#fff7f6',
					100: '#ffeeed',
					200: '#ffdad7',
					300: '#ffb9b3',
					400: '#ff8e85',
					500: '#fa6056',
					600: '#e63b2e',
					700: '#c02a1d',
					800: '#9c251b',
					900: '#81231b',
					950: '#460e09',
				},
				sage: {
					50: '#f6f7f2',
					100: '#e9ede0',
					200: '#d5ddc5',
					300: '#b7c7a1',
					400: '#9aad7c',
					500: '#7e925e',
					600: '#657649',
					700: '#505c3b',
					800: '#434e33',
					900: '#38402d',
					950: '#1c2116',
				},
				cream: {
					50: '#fdf8f1',
					100: '#f8ecdb',
					200: '#f1d8b7',
					300: '#e9be8b',
					400: '#e2a463',
					500: '#db8a45',
					600: '#cd6e3a',
					700: '#a95431',
					800: '#89452c',
					900: '#713a27',
					950: '#3d1c11',
				},
				champagne: {
					50: '#faf8f5',
					100: '#f6f0e8',
					200: '#ede1d1',
					300: '#e2cbb2',
					400: '#d4ad8d',
					500: '#c89373',
					600: '#be8164',
					700: '#a26b55',
					800: '#845849',
					900: '#6c4a3d',
					950: '#39241e',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					from: {
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					from: {
						transform: 'translateX(100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				'slide-in-left': {
					from: {
						transform: 'translateX(-100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'glow': {
					'0%, 100%': {
						'text-shadow': '0 0 20px rgba(226, 161, 149, 0.5), 0 0 40px rgba(226, 161, 149, 0.2)',
						'transform': 'scale(1)'
					},
					'50%': {
						'text-shadow': '0 0 30px rgba(226, 161, 149, 0.8), 0 0 60px rgba(226, 161, 149, 0.4)',
						'transform': 'scale(1.02)'
					}
				},
				'border-glow': {
					'0%, 100%': {
						'border-color': 'rgba(226, 161, 149, 0.6)',
						'box-shadow': '0 0 20px rgba(226, 161, 149, 0.3), inset 0 0 20px rgba(226, 161, 149, 0.3)'
					},
					'50%': {
						'border-color': 'rgba(226, 161, 149, 0.9)',
						'box-shadow': '0 0 30px rgba(226, 161, 149, 0.5), inset 0 0 30px rgba(226, 161, 149, 0.5)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-in-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.7s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
				'float': 'float 5s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'border-glow': 'border-glow 3s ease-in-out infinite'
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
			},
			backgroundImage: {
				'hero-pattern': "url('/lovable-uploads/6335b4af-7c88-4b51-b8e7-593687e4b2cf.png')",
				'products-pattern': "url('/lovable-uploads/7549605d-1dc9-4b3c-8d91-01e52b170a51.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
