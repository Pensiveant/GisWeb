import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  define: {
    NODE_ENV: process.env.NODE_ENV1, // 用于区分生产环境和开发环境
  },
});
