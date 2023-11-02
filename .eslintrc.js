module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'prettier',
  ],
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.d.ts'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
    },
  ],
  root: true,
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'consistent-return': 0,
    'linebreak-style': [2, 'unix'],
    'max-len': [2, 120, 4],
    quotes: [2, 'single'],
    'prefer-const': 2,
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js'],
};
