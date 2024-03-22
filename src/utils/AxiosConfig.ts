import {
  // AxiosHeaders,
  AxiosRequestConfig,
  RawAxiosRequestHeaders
} from "axios";

export enum RequestContentType {
  json = "application/json",
  multipart = "multipart/form-data"
}

export interface RequestConfig {
  token?: string;
  contentType?: RequestContentType;
}

const extractErrorMessage = (errorObject: any): string => {
  const result =
    errorObject.response && errorObject.response.data.message
      ? errorObject.response.data.message
      : errorObject.message;

  return result;
};

const convertObjectToURLParams = (object: any): string => {
  return new URLSearchParams(object).toString();
};

const buildRequestConfig = (config: RequestConfig): AxiosRequestConfig => {
  const { token, contentType } = config;

  let configHeader: Partial<RawAxiosRequestHeaders> = {};

  if (typeof token === "string" && token !== "") {
    configHeader = {
      ...configHeader,
      Authorization: `Bearer ${token}`
    };
  }

  if (contentType) {
    if (contentType === RequestContentType.json) {
      configHeader = {
        ...configHeader,
        "Content-Type": RequestContentType.json
      };
    } else if (contentType === RequestContentType.multipart) {
      configHeader = {
        ...configHeader,
        "Content-Type": RequestContentType.multipart
      };
    }
  }

  return { headers: { ...configHeader } };
};

const buildJsonHeaderConfig = (token?: string) => {
  return buildRequestConfig({ token, contentType: RequestContentType.json });
};

const buildMultipartFormDataHeaderConfig = (
  token?: string
): AxiosRequestConfig => {
  return buildRequestConfig({
    token,
    contentType: RequestContentType.multipart
  });
};

export {
  extractErrorMessage,
  buildJsonHeaderConfig,
  convertObjectToURLParams,
  buildMultipartFormDataHeaderConfig
};
