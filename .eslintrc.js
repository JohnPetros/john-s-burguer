module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['warn', { usePrettierrc: true, endOfLine: 'auto' }],
  },
}
