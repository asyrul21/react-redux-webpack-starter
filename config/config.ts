import type { IEnvConfig } from "./types";

export const config: {
  [key: string]: IEnvConfig;
} = {
  development: {
    API_HOST: "http://localhost:5000",
    API_PREFIX: "/api"
  },
  production: {
    API_HOST: "http://localhost:5000",
    API_PREFIX: "/api"
  }
};
