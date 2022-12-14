module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "babel-eslint",
  ecmaFeatures: {
    "classes": true
  },
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  },
};
