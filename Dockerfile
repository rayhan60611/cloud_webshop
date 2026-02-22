FROM node:latest as build
WORKDIR /app
COPY ./package*json .
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
