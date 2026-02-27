FROM node:20.19.6-alpine3.22 AS build

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10.13.1 --activate

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN pnpm i --ignore-scripts --frozen-lockfile

COPY . .

RUN pnpm run build

# Production stage — serve with nginx (no Node.js needed!)
FROM nginx:1.27-alpine AS production

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom nginx config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]