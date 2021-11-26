module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
    'eslint-plugin-import-helpers',
    'prettier',
    'import',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'import/no-unresolved': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    '@next/next/no-img-element': 'off',
    'no-underscore-dangle': 'off',
    "react/function-component-definition": [2, {
      namedComponents: "function-declaration" | "function-expression" | "arrow-function",
      unnamedComponents: "function-expression" | "arrow-function"
    }]
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};