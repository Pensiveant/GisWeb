/**
 * @Description: 接口地址、请求参数、返回数据类型声明文件
 * @Author: Pensiveant
 * @Date: 2022-06-14 10:08:43
 */

declare namespace API {
  // 接口地址
  interface ApiConfig {
    [s: string]: string;
  }

  // 返回结果，分页对象
  interface PageResult<T> {
    page: number;
    size: number;
    total: number;
    totalPage: number;
    data: T[];
  }
}
