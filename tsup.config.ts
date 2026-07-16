import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  entry: {
    index: './src/index.ts',
    define: './src/define.ts'
  },
  format: 'esm',
  outDir: './static',
  target: 'chrome150'
});
