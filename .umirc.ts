import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  define: {
    NODE_ENV: process.env.NODE_ENV1 || 'development', // 用于区分生产环境和开发环境
  },
  proxy: {
    '/rghg/ems/': {
      target: '',
      changeOrigin: true,
    },
  },
});
