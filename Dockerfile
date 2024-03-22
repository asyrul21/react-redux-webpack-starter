#
# Stage 1: Build
#
FROM node:20.11-alpine as builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm clean-install

COPY . .

RUN npm run build

#
# Stage 2: Nginx
#
FROM nginx:1.25

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;" ]