import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "coverage/**"]
  },
  ...nextVitals
];

export default config;
