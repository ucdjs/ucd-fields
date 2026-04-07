import { defineConfig } from "tsdown";
import fs from "node:fs";

export default defineConfig({
  entry: [
    "./src/*.ts",
  ],
  format: ["esm"],
  clean: true,
  dts: true,
  treeshake: true,
  publint: true,
  exports: true,
  onSuccess: () => {
    // fs.writeFileSync("./dist")
  }
});
