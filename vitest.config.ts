import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default (async () => {
  const baseConfig = await viteConfig({ mode: 'test' });

  return mergeConfig(
    baseConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        globals: true,
      },
    })
  );
})();
