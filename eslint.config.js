import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      ...prettierConfig.rules,
    },
  },
]);
