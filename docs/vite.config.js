// yarn dev 用到的vite配置

/**
 * @type {import('vite').UserConfig}
 */
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vueJsx()],
});
