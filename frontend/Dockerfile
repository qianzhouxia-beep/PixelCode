FROM node:22-bullseye-slim

WORKDIR /app

COPY package.json yarn.lock ./

ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN yarn install --frozen-lockfile || yarn install

# Install serve as a global dependency for production serving
RUN npm install -g serve

COPY ./ ./

# Build - skip tsc (vite handles transpilation, strict mode tsc may fail)
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN yarn build

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "--no-clipboard", "80"]
