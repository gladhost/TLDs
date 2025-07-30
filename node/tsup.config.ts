import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["index.ts"],
    clean: true,
    format: ["esm", "cjs"],
    dts: true,
    outExtension({ format }) {
        return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' };
    },
});
