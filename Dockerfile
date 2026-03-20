# Stage 1: Build the React frontend
FROM node:20-slim AS build-stage
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Serve with Flask
FROM python:3.11-slim
WORKDIR /app

# Install system dependencies if needed (e.g., for some python packages)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY server/requirements.txt ./server/
RUN pip install --no-cache-dir -r server/requirements.txt

# Copy server code
COPY server/ ./server/

# Copy built frontend from build-stage
COPY --from=build-stage /app/client/dist ./client/dist

# Set environment variables
ENV FLASK_APP=server/app.py
ENV PORT=7860

# Expose the port HF Spaces expects
EXPOSE 7860

# Run the application
CMD ["python", "server/app.py"]
