import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";
import qs from "query-string";

export const HOST = process.env.NEXT_PUBLIC_HOST as string;
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string;

export const request = axios.create({
  baseURL: HOST,
  timeout: 60000,
});

const pendingRequest = new Map<string, CancelTokenSource>();

const generateReqKey = (config: AxiosRequestConfig) => {
  const { method, url, params, data } = config;
  return [method, url, qs.stringify(params), qs.stringify(data)].join("&");
};

const addPendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = generateReqKey(config);

  // Create a CancelTokenSource
  const source: CancelTokenSource = axios.CancelToken.source();

  config.cancelToken = source.token;

  if (!pendingRequest.has(requestKey)) {
    pendingRequest.set(requestKey, source);
  }
};

const removePendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const { cancel } = pendingRequest.get(requestKey)!;
    cancel(requestKey);
    pendingRequest.delete(requestKey);
  }
};

request.interceptors.request.use(
  (config) => {
    removePendingRequest(config);
    addPendingRequest(config);
    config.headers["Domain"] = DOMAIN;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    removePendingRequest(response.config);
    const { status, statusText, config, headers } = response;
    const { data, code, msg } = response?.data || {};

    if (code === 0) {
      return Promise.resolve(data);
    }

    console.log("Accident:", msg);

    return Promise.reject(data);
  },
  (error) => {
    removePendingRequest(error.config || {});

    console.warn("response error------------", JSON.stringify(error.message));
    if (axios.isCancel(error)) {
      console.warn(`已取消的重复请求：${error.message}`);
    } else {
      console.log("Network ERROR!");
      return Promise.reject(error);
    }
  }
);
