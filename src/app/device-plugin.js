const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
  addVariant(
    "mouse",
    "@media (hover: none) and (pointer: coarse)"
  );
});
