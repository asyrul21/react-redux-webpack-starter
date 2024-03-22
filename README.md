# React Redux Webpack Starter

React Version: v18.2.0

React Dom Version: v18.2.0

Node: v20.11.0

## Setup

1. Develop

```bash
npm start
```

2. Create Production Build

```bash
npm run build
```

3. Unit Test

```bash
npm run test
```

3. ES Lint

```bash
npm run lint
```

## Docker (Production build)

### Image

```bash
# build
docker build -t [user/your-front-end tag] .
# run the image
docker run --rm -ti -p 3000:3000 [user/your-front-end tag]
# publish
docker push [image tag]
```

### Compose

```bash
docker compose up --build
```

# Issues

[React Router Dom v6 - Only root route works](https://stackoverflow.com/questions/74168230/react-router-v6-issue-only-the-root-route-works-any-other-endpoint-returns)
