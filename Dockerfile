FROM node:18-alpine

RUN npm install -g pnpm@8.10.5

WORKDIR /app

RUN apk --no-cache add git \
    && rm -rf /var/cache/apk/*

# COPY ./package*.json /app/

COPY . .

RUN chown -Rf node:node /app

USER node

RUN pnpm config set store-dir /home/node/.local/share/pnpm/store/v3 --global \
    && pnpm install

USER root

RUN chown -Rf node:node /app

ENV PATH ./node_modules/.bin/:$PATH

USER node

ENTRYPOINT ["/bin/sh"]

# # Dockerfile
# # base
# FROM node:lts-alpine AS base

# RUN npm install -g pnpm

# # dependencies
# # FROM base AS dependencies

# RUN mkdir -p /home/node/app

# RUN chown -Rf node:node /home/node/app

# RUN pnpm config set store-dir /home/node/.local/share/pnpm/store/v3 --global

# USER node

# WORKDIR /home/node/app

# COPY package.json pnpm-lock.yaml .

# RUN pnpm install

# COPY . .

# USER node

# WORKDIR /home/node/app

# # RUN rm -Rf ./node_modulesdo

# # RUN pnpm install

# # RUN pnpm build

# # build
# # FROM base as development

# # WORKDIR /webapp

# # COPY --from=dependencies /webapp/node_modules /webapp/node_modules

# # ENV NODE_ENV=development
# # RUN pnpm build

# # FROM node:lts-alpine

# # COPY --chown=node:node --from=build /app/.output ./

# ENV host 0.0.0.0

# ENV port 3000

# EXPOSE 3000

# EXPOSE 24678

# USER node
