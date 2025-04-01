import js from "@eslint/js";
import react from "eslint-plugin-react";
import parser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      parser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"], // 👈 Ensure Babel understands JSX
        },
        plugins: ["jsx"], // 👈 Enable JSX parsing
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },
    plugins: { react },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
  },
];
