export const config: {
  [key: string]: {
    [key: string]: string | number;
  };
} = {
  development: {
    API_BASE_URL: "http://localhost:5000/api",
  },
  production: {
    API_BASE_URL: "http://localhost:5000/api",
  },
};
