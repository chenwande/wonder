import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  runtimePublicPath: {},
  themeConfig: {
    name: 'wonder',
  },
});
