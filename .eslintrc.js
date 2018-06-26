module.exports = {
    extends: "standard",
    parser: 'typescript-eslint-parser',
    rules: {
      "no-undef": 0,
      "comma-dangle": ["warn", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      }],
    },
};
