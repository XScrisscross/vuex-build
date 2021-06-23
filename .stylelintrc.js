module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'order/order': [
      ['custom-properties', 'declarations'],
      {
        disableFix: true,
      },
    ],
    'order/properties-order': ['width', 'height'],
    // 'indentation': 'tab',
    'number-leading-zero': null,
  },
}
