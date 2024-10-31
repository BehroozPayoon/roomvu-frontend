# FROM node:18-alpine as build-stage
# WORKDIR /web
# # RUN sed -i 's/http\:\/\/dl-cdn.alpinelinux.org/https\:\/\/alpine.global.ssl.fastly.net/g' /etc/apk/repositories
# # RUN apk update && apk upgrade
# RUN npm install -g pnpm

# COPY package.json pnpm-lock.yaml* ./
# RUN pnpm install 

# COPY . .
# EXPOSE 3000
# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=3000
# CMD ["pnpm", "dev"]

# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build the project
RUN pnpm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/.output /app/.output

# Install only production dependencies
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && \
    pnpm install --prod --frozen-lockfile

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]