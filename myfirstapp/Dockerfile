#Ubuntu baed Hello word container
FROM node:12.16.2 as build-deps

WORKDIR /usr/src/myfirstapp
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

#STEP 2 - the production environment
FROM nginx:1.17.9-alpine
COPY --from=build-deps /usr/src/myfirstapp/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]