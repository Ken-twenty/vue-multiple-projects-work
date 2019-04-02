/**
 * @author guanhong.chen (创建人，有多个则[guanhong.chen, weili.zeng, junjin.chen])
 * @date 2019-03-26 (创建的时间)
 * @description 处理前后端数据交互基础类 (描述内容)
 *
 * @user guanhong.chen (修改人[如对文件做了修改，加上对应的修改注释])
 * @date 2019-03-27 (修改的时间)
 * @description HttpRequest 类增加 responseType、maxContentLength 属性成员 (描述下修改什么内容)
 *
 * @link 注释规范参考 http://usejsdoc.org/
 */

import axios from 'axios';

/**
 * @class HttpRequest
 * @classdesc 前后数据交换基础类
 * @description 这里可无注释，都放到constructor里
 */
class HttpRequest {

  /**
   * @constructor HttpRequest
   * @description HttpRequest 基础类
   * @param { String } baseUrl 根路径，默认"/"
   * @param { Object } headers 头部声明
   * @param { String } responseType 响应类型，默认json, 可选 arraybuffer/blob/document/json/text/stream
   * @param { Array } transformRequest 请求之前对请求数据进行操作 (仅对 PUT, POST, PATCH 方法适用)
   * @param { Array } transformResponse 在 then/catch 前，允许修改响应数据
   * @param { Function } paramsSerializer 对 params 序列化操作
   * @param { Number } maxContentLength 响应内容的最大长度，默认2000
   * @param { Number } timeout 超时，默认5s
   *
   * @link 详细配置参考https://github.com/axios/axios
   *
   * @example transformRequest
   * transformRequest = [
   *   (data, headers) => {
   *     // handle data or update headers
   *     return data;
   *   }
   * ]
   *
   * transformResponse = [
   *   (data) => {
   *     // handle data
   *     return data;
   *   }
   * ]
   *
   * paramsSerializer = (params) => {
   *   return stringify(params, {arrayFormat: 'brackets'});
   * }
   */
  constructor({
    baseUrl = '/',
    headers = { 'Content-Type': 'application/json' },
    responseType = 'json',
    transformRequest = [],
    transformResponse = [],
    paramsSerializer = (params) => params,
    maxContentLength = 2000,
    timeout = 5000,
  }) {

    this.baseUrl = baseUrl;
    this.headers = headers;
    this.responseType = responseType;
    this.transformRequest = transformRequest;
    this.transformResponse = transformResponse;
    this.paramsSerializer = paramsSerializer;
    this.maxContentLength = maxContentLength;
    this.timeout = timeout;

  }

  getInitialConfig() {

    return {
      baseUrl: this.baseUrl,
      headers: this.headers,
      responseType: this.responseType,
      transformRequest: this.transformRequest,
      transformResponse: this.transformResponse,
      maxContentLength: this.maxContentLength,
      timeout: this.timeout,
    };

  }

  static handleInterceptors(instance) {

    instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    );

    instance.interceptors.response.use(
      (response) => {

        return {
          status: response.status,
          data: response.data,
        };

      },
      (error) => {

        if (error.response.status === 401) {
          /*
           * handler()
           * else if (otherStatus) { otherHandler }
           */
        }

        return Promise.reject(error);

      },
    );

  }

  request(options = {}) {

    const instance = axios.create();
    this.handleInterceptors(instance);

    return instance({
      ...this.getInitialConfig(),
      ...options,
    });

  }

}

export default HttpRequest;
