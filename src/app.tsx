import { RequestConfig } from 'umi';
import { message } from 'antd';

export const request: RequestConfig = {
  timeout: 20000,
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.code < 300,
        errorMessage: `数据请求错误：${resData.code}[${resData.msg}]`,
      };
    },
  },
  middlewares: [],
  requestInterceptors: [
    (url, options) => {
      return {
        url: window.API_BASE_URL + url,
        options: {
          ...options,
        },
      };
    },
  ],
  responseInterceptors: [
    async (response) => {
      if (response.status > 399 && response.status < 500) {
        message.error(response.status + '，三秒后跳转到登录页');
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
      // const data = await response.clone().json();

      return response;
    },
  ],
};
