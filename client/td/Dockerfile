# Build environment
FROM node:14.21.3-alpine as build
WORKDIR /app
COPY . /app
RUN npm i --silent
RUN npm run build

# Production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
