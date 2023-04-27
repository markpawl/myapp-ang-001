# Stage 1: Build an Angular Docker Image
FROM node as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
ARG configuration=production
RUN npm run build 
# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/myapp-ang-001/ /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf