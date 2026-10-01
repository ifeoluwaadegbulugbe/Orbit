import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Copy-heavy marketing/blog content uses plain apostrophes throughout;
      // escaping every one as &apos; hurts source readability for no real benefit.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
