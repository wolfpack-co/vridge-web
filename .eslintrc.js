'use strict';

module.exports = {
  extends: ['@tailify', '@tailify/react'],
  parser: 'babel-eslint',
  root: true,
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^@tailify/design-system$'] }],
    'no-underscore-dangle': ['error', { allow: ['__typename'], enforceInMethodNames: true }],
  },
};
