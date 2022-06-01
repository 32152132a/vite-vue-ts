module.exports = {
  extends: [
    'stylelint-config-standard', // css规则
    'stylelint-config-rational-order' // css 排序规则
  ],
  plugins: [
    'stylelint-order', // css 排序
    // 'stylelint-no-unused-selectors'
  ],
  rules: {
      'indentation': 2, // css 缩进
      // "plugin/no-unused-selectors": true,
      'no-descending-specificity': null,
      //https://github.com/stylelint/stylelint/issues/4114
      'function-calc-no-invalid': null,
      'function-url-quotes': 'always',
      'font-family-no-missing-generic-family-keyword': null, // iconfont
      'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']

}