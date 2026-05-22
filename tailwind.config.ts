import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        command: {
          navy: "#05325a",
          slate: "#697783",
          ivory: "#f8f8f4",
          ink: "#16212b",
          line: "#d9dedc",
          surface: "#ffffff"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        panel: "0 12px 32px rgba(5, 50, 90, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
