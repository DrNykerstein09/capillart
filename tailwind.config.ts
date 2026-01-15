import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        whatsapp: {
          DEFAULT: "hsl(var(--whatsapp))",
          foreground: "hsl(var(--whatsapp-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
      },
      backdropSaturate: {
        120: "1.2",
        150: "1.5",
        180: "1.8",
      },
      backgroundSize: {
        gradient: "200% 200%",
      },
      backgroundImage: {
        "gradient-mesh": "radial-gradient(at 0% 0%, hsl(213, 91%, 37% / 0.15) 0px, transparent 50%), radial-gradient(at 50% 0%, hsl(200, 51%, 48% / 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, hsl(213, 91%, 47% / 0.1) 0px, transparent 50%), radial-gradient(at 50% 100%, hsl(215, 59%, 19% / 0.08) 0px, transparent 50%)",
        "grid-pattern": "linear-gradient(hsl(214, 24%, 90% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(214, 24%, 90% / 0.1) 1px, transparent 1px)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        strong: "var(--shadow-strong)",
        "glow-sm": "0 0 10px -2px hsl(213, 91%, 37% / 0.3)",
        "glow-md": "0 0 20px -5px hsl(213, 91%, 37% / 0.3), 0 0 40px -10px hsl(200, 51%, 48% / 0.2)",
        "glow-lg": "0 0 30px -5px hsl(213, 91%, 37% / 0.4), 0 0 60px -10px hsl(200, 51%, 48% / 0.3), 0 0 100px -20px hsl(213, 91%, 47% / 0.2)",
        glass: "0 0 0 1px hsl(0, 0%, 100% / 0.1), 0 4px 16px -4px hsl(215, 59%, 19% / 0.08)",
        "glass-hover": "0 0 0 1px hsl(213, 91%, 37% / 0.3), 0 8px 32px -4px hsl(213, 91%, 37% / 0.1), 0 16px 64px -8px hsl(215, 59%, 19% / 0.08)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-rotate": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px -5px hsl(213, 91%, 37% / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px -5px hsl(213, 91%, 37% / 0.5), 0 0 60px -10px hsl(200, 51%, 48% / 0.3)",
          },
        },
        "mesh-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 0%, 50% 0%, 100% 0%, 50% 100%",
          },
          "50%": {
            backgroundPosition: "20% 10%, 70% 5%, 80% 15%, 30% 90%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-rotate": "gradient-rotate 4s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "mesh-shift": "mesh-shift 20s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
