
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN set -ex; npm ci --only=production

FROM node:lts-alpine AS image
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /app
COPY --chown=node:node --from=builder /app/node_modules /app/node_modules
COPY --chown=node:node . /app
CMD ["dumb-init", "node", "server.js"]
