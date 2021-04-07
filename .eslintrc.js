module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ["@typescript-eslint", "react", "react-hooks"],
      rules: {
        // allow overload
        // see https://github.com/typescript-eslint/typescript-eslint/issues/291
        "no-dupe-class-members": 0,

        // allow special triple slashes comment: "/// <reference />"
        "spaced-comment": [
          2,
          "always",
          { line: { markers: ["/"] }, block: { balanced: true } },
        ],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": ["error"],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,

        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/no-namespace": [2, { allowDeclarations: true }],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/prefer-namespace-keyword": 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-module-boundary-types": 2,

        "react/jsx-no-target-blank": "error",
        "react/jsx-uses-react": [1],
        "react/prop-types": 0,

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
      },
      settings: {
        node: {
          tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
        },
        react: {
          version: "detect",
        },
      },
    },
  ],
};