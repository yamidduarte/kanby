FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prod
FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.config
COPY --from=build /app/dist/kanby/ /usr/share/nginx/html