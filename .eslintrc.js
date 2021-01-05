module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: false,
        assignment: false,
      },
    ],
  },
}
