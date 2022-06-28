import { defineConfig } from 'umi';
import appConfig from './src/config/appConfig';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  ...appConfig,
  mfsu: {}, // 开启 mfsu 功能，解决打包慢问题，注意：放在单独文件appConfig中会报错
});
