FROM floryn90/hugo:0.136.5 AS build

WORKDIR /src

COPY . .

RUN hugo

FROM nginx:1.21.6-alpine
COPY --from=build /src/public/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
