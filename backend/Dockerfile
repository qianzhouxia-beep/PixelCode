FROM python:3.12.3-slim-bullseye

ENV POETRY_VERSION 1.8.0

# Install system dependencies
RUN pip install --no-cache-dir "poetry==$POETRY_VERSION"

# Set work directory
WORKDIR /app

# Copy only requirements to cache them in docker layer
COPY poetry.lock pyproject.toml /app/

# Disable the creation of virtual environments
RUN poetry config virtualenvs.create false

# Install dependencies (with verbose output for debugging)
RUN poetry install --no-interaction 2>&1 | tail -20 || { echo "=== POETRY INSTALL FAILED ===" && exit 1; }

# Copy the current directory contents into the container at /app
COPY ./ /app/

# Expose port
EXPOSE 7001

# Start the backend server
CMD ["python", "-u", "start.py", "--port", "7001"]
