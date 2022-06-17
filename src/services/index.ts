/**
 * @Description: 接口统一请求函数
 * @Author: Pensiveant
 * @Date: 2022-06-14 10:19:08
 */
import { requestConfig, api } from './config';
import { extend, RequestOptionsInit } from 'umi-request';
import { message } from 'antd';

let requestOptions: RequestOptionsInit = {
  ...requestConfig,
};

// 处理token
const token = sessionStorage.getItem('token');
requestOptions = {
  ...requestOptions,
  headers: {
    Authorization: token || 'default',
  },
};

// 错误统一处理
const errorHandler = function (error: any) {
  const codeMessage: any = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求体有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '500，服务器错误。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  message.error(error.data.message || codeMessage[error.response.status]);
  throw error;
};
requestOptions = {
  ...requestOptions,
  errorHandler,
};

const request = extend(requestOptions);

const services: { [s: string]: any } = {};
function createAPI(
  path: string,
  params: { [s: string]: any },
  config: any = {},
) {
  const method = path.split(' ')[0];
  let url = path.split(' ')[1];

  // 判断配置格式是否正确
  if (
    ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'HEAD', 'OPTIONS'].indexOf(
      method,
    ) === -1
  ) {
    throw new Error(`${path}请求地址配置格式错误！正确格式为[method url]`);
  }

  const options: any = {};
  // 处理路径参数（比如DELETE URL中含有的/{id}）
  const paramsArr: string[] = [];
  for (let key in params) {
    const regStr = `\{${key}}`;
    while (url && url.indexOf(regStr) > -1) {
      url = url.replace(regStr, params[key]);
      paramsArr.push(key);
      delete params[key]; // 删除了路径参数对应字段
    }
  }

  if (method.toUpperCase() === 'GET') {
    options.params = params;
  } else if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
    options.data = params;
  }

  // 表单请求
  if (
    config &&
    config.headers &&
    config.headers['Content-Type'] === 'multipart/form-data'
  ) {
    options.requestType == 'form';
    const payload = new FormData();
    for (let key in params) {
      payload.append(key, params[key]);
    }
  }

  return request(url, {
    method: method,
    ...options,
    ...config,
  });
}

Object.keys(api).forEach((key) => {
  services[key] = (params: { [s: string]: any }, config: any = {}) =>
    createAPI(api[key], params, config);
});

export default services;
