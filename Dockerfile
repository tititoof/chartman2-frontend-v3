# Dockerfile
FROM node:lts-alpine

RUN mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm run build

USER node

ENV host 0.0.0.0

EXPOSE 3000

CMD ["pnpm", "run dev"]