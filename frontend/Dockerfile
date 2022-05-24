FROM node:latest as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

#altenatively run npm ci
RUN npm install

COPY ./ ./

EXPOSE 3000

#ENV CHOKIDAR_USEPOLLING=true

RUN npm run build 

#PRODUCTION ENVIRONMENT

FROM nginx:stable-alpine as prod

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]