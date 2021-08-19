// yarn build 用到的vite配置

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  optimizeDeps: {
    include: [],
    exclude: [],
  },
  plugins: [vue(), vueJsx()],
  build: {
    minify: true,
    lib: {
      entry: resolve('./src/index.ts'),
      name: 'vue-typical',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
