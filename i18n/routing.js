const { defineRouting } = require("next-intl/routing");

const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localeDetection: true
});

module.exports = { routing };
