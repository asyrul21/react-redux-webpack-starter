export const config: {
  [key: string]: {
    [key: string]: string;
  };
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
