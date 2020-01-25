module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "webextensions": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
  }
};
