module.exports = {
  extends: ["next", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "prefer-arrow-callback": 1,
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
}
