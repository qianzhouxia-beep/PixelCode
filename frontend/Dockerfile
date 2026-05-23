FROM node:22-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock /app/

# Set the environment variable to skip Puppeteer download
ENV PUPPETEER_SKIP_DOWNLOAD=true

# Install dependencies
RUN yarn install

# Copy the current directory contents into the container at /app
COPY ./ /app/

# Build the frontend
RUN yarn build

# Expose port for the preview server (or use nginx in production)
EXPOSE 80

# Serve built files with a simple HTTP server
CMD ["npx", "serve", "-s", "dist", "-l", "80"]
