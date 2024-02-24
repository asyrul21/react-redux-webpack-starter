import axios, { AxiosRequestConfig } from "axios";
import { config } from "../../config";

const APP_CONFIG = config[process.env.NODE_ENV as string];
const BASE_URL = APP_CONFIG.API_BASE_URL;

export const post = <T = any>(
  url: string,
  data: T,
  axiosOptions?: AxiosRequestConfig<T> | undefined
): Promise<unknown> => {
  return axios.post(`${BASE_URL}${url}`, data, axiosOptions);
};
