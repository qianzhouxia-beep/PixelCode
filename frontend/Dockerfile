FROM node:22-bullseye-slim

WORKDIR /app

# Copy pre-built dist/ (built locally, committed to Git)
# No yarn install, no yarn build - avoids Zeabur OOM
COPY dist/ ./dist/

# Install serve globally for production serving
RUN npm install -g serve

EXPOSE 80

# Serve dist/ on port 80
CMD ["serve", "-s", "dist", "-l", "--no-clipboard", "80"]
