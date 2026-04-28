/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: {
          950: "#08090B",
          900: "#0E1014",
          800: "#15181E",
          700: "#1E222A",
          600: "#2A2F39",
          500: "#3A4150",
        },
        cream: {
          50: "#FBF8F2",
          100: "#F5F1E8",
          200: "#EAE3D2",
        },
        gold: {
          50: "#FBF6E8",
          100: "#F4E9C5",
          200: "#E9D599",
          300: "#DCBE6B",
          400: "#CFA84B",
          500: "#C29435",
          600: "#A17726",
          700: "#7E5C1E",
        },
        accent: {
          DEFAULT: "#D4AF6B",
          warm: "#E8B547",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        "radial-spotlight": "radial-gradient(circle at 50% 0%, rgba(212,175,107,0.18), transparent 60%)",
        "gold-gradient": "linear-gradient(135deg, #E8C77A 0%, #C29435 50%, #7E5C1E 100%)",
        "shine": "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(212,175,107,0.55)",
        "glow-strong": "0 0 80px -10px rgba(212,175,107,0.75)",
        soft: "0 20px 60px -25px rgba(0,0,0,0.45)",
        card: "0 25px 70px -30px rgba(0,0,0,0.55)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "shine": "shine 2.4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 38s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 22s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-150% 0" },
          "100%": { backgroundPosition: "250% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};
