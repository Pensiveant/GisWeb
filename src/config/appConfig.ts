import routes from './routes';

const appConfig: any = {
  title: 'webGIS开发框架', // 系统名称，参考umi配置
  favicon: '/assets/favicon.ico', // favicon 地址，参考umi配置
  define: {
    NODE_ENV: process.env.NODE_ENV1 || 'development', // 用于区分生产环境和开发环境
  },
  // 代理配置
  proxy: {
    '/rghg/ems/': {
      target: '',
      changeOrigin: true,
    },
  },
  // 路由配置
  history: { type: 'hash' },
  routes,
  styles: [
    // 引入字体
    `@font-face {
      font-family: PingFang SC;
      src: url("./font/PingFang Regular.ttf");
    }
  
      @font-face {
      font-family: PingFangSC-Medium;
      src: url("./font/PingFang Medium.ttf");
    }
      @font-face {
      font-family: PangMenZhengDao;
      src: url("./font/PangMenZhengDaoBiaoTiTi-1.ttf");
    }`,
  ],
  // 打包配置
  publicPath: './',
};

export default appConfig;
