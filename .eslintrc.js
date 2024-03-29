module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    // 代码使用4个空格的缩进风格
    indent: ['error', 4],
    'linebreak-style': ['off','windows']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //     ],
  //     env: {
  //       mocha: true,
  //     },
  //   },
  // ],
};
