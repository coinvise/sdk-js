module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-coinvise`
  extends: ["coinvise"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
