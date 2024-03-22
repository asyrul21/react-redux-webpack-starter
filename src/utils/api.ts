import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "../../config/config";

const APP_CONFIG = config[process.env.NODE_ENV as string];

const API_HOST = APP_CONFIG.API_HOST;
const API_PREFIX = APP_CONFIG.API_PREFIX ?? "";
const BASE_URL = `${API_HOST}${API_PREFIX}`;

export const post = async <T = any>(
  url: string,
  data: T,
  axiosOptions?: AxiosRequestConfig<T> | undefined
): Promise<AxiosResponse> => {
  return await axios.post(`${BASE_URL}${url}`, data, axiosOptions);
};
