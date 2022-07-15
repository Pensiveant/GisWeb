/**
 * @Description: 接口地址配置文件
 * @Author: Pensiveant
 * @Date: 2022-06-14 10:12:20
 */
const isProduct = process.env.APP_ENV === 'production';
const requestConfig = {
  prefix: isProduct ? '/rghg/ems' : 'XXX', // 接口前缀：第一项为产品端配置；后面一项为开发端配置
  timeout: 1000,
};

const api: API.ApiConfig = {
  login: 'POST /oauth', // 登录接口

  // 后台管理-订阅者管理
  SUBSCRIBER_LIST: 'GET /subscribers', //
  SUBSCRIBER_ADD: 'POST /subscribers', //
  SUBSCRIBER_EIDT: 'PUT /subscribers', //
  SUBSCRIBER_DELETE: 'DELETE /subscribers/{id}',
};

export { requestConfig, api };
