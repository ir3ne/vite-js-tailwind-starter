// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist', 'public'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prettier/prettier': 'error',
    },
  },
]
