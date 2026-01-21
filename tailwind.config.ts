import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Typography - Font Families
            fontFamily: {
                sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
                barlow: ["var(--font-barlow)", "system-ui", "sans-serif"],
                inter: ["var(--font-inter)", "system-ui", "sans-serif"],
            },

            // Font Sizes with Line Heights
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.375rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                md: ["1.125rem", { lineHeight: "1.75rem" }],
                lg: ["1.25rem", { lineHeight: "1.75rem" }],
                xl: ["1.5rem", { lineHeight: "2rem" }],
                "2xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "3xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "4xl": ["3rem", { lineHeight: "1.2" }],
                "5xl": ["3.75rem", { lineHeight: "1" }],
                "6xl": ["4.5rem", { lineHeight: "1" }],
                hero: ["3.75rem", { lineHeight: "1" }],
                h3: ["1.5rem", { lineHeight: "1", letterSpacing: "0px", fontWeight: "600" }],
                h6: ["1.5rem", { lineHeight: "1", letterSpacing: "0px", fontWeight: "600" }],
            },

            // Box Shadows
            boxShadow: {
                sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
                none: "none",
                "primary-glow": "0 0 20px rgba(6, 110, 182, 0.3)",
                "secondary-glow": "0 0 20px rgba(107, 192, 106, 0.3)",
            },

            // Custom Widths
            width: {
                'preview-btn': '130px',
            },

            // Animations
            animation: {
                "fade-in": "fadeIn 0.3s ease-in-out",
                "slide-up": "slideUp 0.3s ease-out",
                "slide-down": "slideDown 0.3s ease-out",
                "scale-in": "scaleIn 0.2s ease-out",
            },
            theme: {
                extend: {
                    width: {
                        'header-lg': '887px', // for large screens
                    },
                    height: {
                        'header-lg': '116px', // fixed height
                    },
                    maxWidth: {
                        'header-lg': '887px', // optional if you want max-width
                    },
                    minWidth: {
                        'header-lg': '887px',
                    },
                }
            },


            // Keyframes
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
