import next from "eslint-config-next";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    ...next,
    rules: {
      // Your custom rules
    }
  },
  {
    ignores: [".next/", "node_modules/"]
  }
);