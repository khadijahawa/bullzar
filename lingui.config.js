// /** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "ar-EG", "fr"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"]
    }
  ]
};
