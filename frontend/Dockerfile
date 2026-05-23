FROM node:22-bullseye-slim

WORKDIR /app

COPY package.json yarn.lock ./

ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN yarn install --frozen-lockfile || yarn install

# Install serve globally for production
RUN npm install -g serve

COPY ./ ./

# Build with increased memory limit (this project is large)
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN yarn build

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "--no-clipboard", "80"]
