module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-native'],
  rules: {
    'prettier/prettier': ['off', {
      singleQuote: false,
    }],
    'react-native/no-inline-styles': 'off',
  },
};
