FROM node:20.19.6-alpine3.22 AS build

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN pnpm i --ignore-scripts --frozen-lockfile

COPY . .

RUN pnpm run build

FROM nginx:1.27-alpine AS production

# Run nginx as non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/app.conf

COPY --from=build /app/dist /usr/share/nginx/html

# Add build arg for cache busting or env tracking
ARG BUILD_DATE
ARG GIT_COMMIT
LABEL org.opencontainers.image.created=$BUILD_DATE \
      org.opencontainers.image.revision=$GIT_COMMIT

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]