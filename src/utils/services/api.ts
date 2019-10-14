import Taro from '@tarojs/taro'; // 引入taro核心库
import { HTTP_STATUS } from '@constants'; // 请求状态码
import { baseUrl } from '../../config'; // 请求地址
import logError from './../error'; // 错误信息打印

type OptionType = {
  url: string;
  data?: Object | String | ArrayBuffer;
  method?: any;
  header: object;
  success: any;
  error: any;
};

export default {
  // 基础配置
  baseOptions(params, method = 'GET') {
    let { url, data } = params;
    // 存储cookies
    const setCookie = (cookies: Array<string>) => {
      if (cookies && cookies.length > 0) {
        let res: string = '';
        cookies.forEach(item => {
          res += `${item};`;
        });
        Taro.setStorageSync('cookies', res);
      }
    };
    // 请求配置项
    const option: OptionType = {
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        cookie: Taro.getStorageSync('cookies')
      },
      success(res) {
        //存储cookies
        setCookie(res.cookies);
        // 根据不同的状态吗 提示不同的信息
        switch (res.statusCode) {
          case HTTP_STATUS.NOT_FOUND:
            return logError('api', '请求资源不存在');
          case HTTP_STATUS.BAD_GATEWAY:
            return logError('api', '服务端出现了问题');
          case HTTP_STATUS.FORBIDDEN:
            return logError('api', '没有权限访问');
          case HTTP_STATUS.AUTHENTICATE:
            Taro.clearStorage();
            Taro.navigateTo({
              url: '' // 登录地址
            });
            return logError('api', '请先登录');
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e);
      }
    };
    // eslint-disable-next-line
    return Taro.request(option);
  },
  // 几种请求方式
  get(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option);
  },
  post(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, 'POST');
  },
  put(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, 'PUT');
  },
  delete(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, 'DELETE');
  }
};
