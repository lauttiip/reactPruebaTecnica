import globals from "globals"
import pluginReact from "eslint-plugin-react"
import js from "@eslint/js"
import pluginReactHooks from "eslint-plugin-react-hooks"

export default [
  js.configs.recommended, // reglas básicas
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Reglas de los hooks
      "react-hooks/exhaustive-deps": "warn", // Reglas de dependencias en useEffect
      "react/react-in-jsx-scope": "off", // Porque en Vite/React 17+ no hace falta importar React
      "no-unused-vars": "warn", // Que avise si declarás cosas que no usás
      "no-undef": "error", // Que tire error si usás cosas sin importar
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]
