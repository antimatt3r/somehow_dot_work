# Stage 1: Build the Hugo website
FROM alpine:3.19 AS builder

RUN apk add --no-cache hugo

WORKDIR /src

COPY . .

RUN hugo --minify

# Stage 2: Serve the website using Nginx
FROM nginx:alpine

COPY --from=builder /src/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
