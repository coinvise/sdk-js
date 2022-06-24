module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --cache --fix", "prettier --write"],
  "*.{css,scss}": ["prettier --write"],
  "*.{md,html,json}": ["prettier --write"],
}
