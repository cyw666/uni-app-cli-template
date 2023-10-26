/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@unocss',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',
    // reactivity transform
    'vue/no-setup-props-destructure': 'off',
    'vue/no-mutating-props': [
      'error',
      {
        shallowOnly: true,
      },
    ],
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
