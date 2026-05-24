FROM node:22-bullseye-slim

WORKDIR /app

# Copy pre-built dist/ (built locally, committed to Git)
COPY dist/ ./dist/

# Install serve globally for production serving
RUN npm install -g serve

EXPOSE 80

# Serve dist/ on port 80
CMD ["serve", "-s", "dist", "-l", "80"]
