// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginStorybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ✅ Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      storybook: pluginStorybook,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Import
      'import/order': ['warn', { groups: ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],

      // Storybook
      ...pluginStorybook.configs.recommended.rules,
    },
  },
  prettier,
]);
