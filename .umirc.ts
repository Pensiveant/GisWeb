import { defineConfig } from 'umi';
import appConfig from './src/config/appConfig';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  ...appConfig,
});
