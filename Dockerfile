FROM floryn90/hugo:0.170.1-ext AS build

WORKDIR /src

COPY . .

RUN hugo

FROM nginx:1.31.6-alpine
COPY --from=build /src/public/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
