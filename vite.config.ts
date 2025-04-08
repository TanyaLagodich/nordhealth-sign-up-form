import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_URL || '/',
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: 'index.html',
          404: '404.html',
        },
      },
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('provet-'),
          },
        },
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/@provetcloud/themes/lib/*.css',
            dest: 'themes',
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  };
});
