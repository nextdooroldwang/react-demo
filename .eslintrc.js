module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "eslint-plugin-import-helpers",
    "react-hooks",
    "jest"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-relative-parent-imports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import-helpers/order-imports": [
      "error",
      {
        groups: [
          "module",
          "/^@wrappers/",
          "/^@layouts/",
          "/^@components/",
          ["parent", "index", "sibling"],
        ],
        newlinesBetween: "always",
      },
    ],
    "react/button-has-type": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-curly-brace-presence": ["error", "never"],
    // "react/jsx-props-no-spreading": [
    //   "error",
    //   {
    //     html: "enforce",
    //     custom: "enforce",
    //     explicitSpread: "enforce",
    //     exceptions: ["Link"],
    //   },
    // ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": process.env.CI ? "error" : "warn",
  }
};
