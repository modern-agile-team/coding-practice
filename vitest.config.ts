import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["level-*/**/*.test.ts", "scripts/**/*.test.ts"],
  },
});
