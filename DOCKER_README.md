# Docker Setup Guide for Portfolio

## Quick Start

### Option 1: Using Docker Compose (Recommended - Easiest)

```bash
# Build and run the container
docker-compose up --build

# Access your portfolio at http://localhost:3000
```

### Option 2: Using Docker CLI

```bash
# Build the image
docker build -t portfolio-app:latest .

# Run the container
docker run -p 3000:3000 portfolio-app:latest

# Access your portfolio at http://localhost:3000
```

## What's Included

✅ NodeJS 18-alpine (lightweight)
✅ Project build optimization
✅ All assets (videos, images, etc.)
✅ Production-ready server with `serve`
✅ Health checks enabled
✅ No conflicts - isolated runtime

## Useful Commands

```bash
# View running containers
docker ps

# View logs
docker-compose logs -f portfolio

# Stop the container
docker-compose down

# Rebuild and restart
docker-compose up --build --force-recreate

# Remove the image
docker rmi portfolio-app:latest
```

## Environment

- **Port:** 3000
- **Node Version:** 18-alpine
- **Server:** serve (lightweight production server)
- **Health Check:** Every 30 seconds

## Deployment

To push to a registry (Docker Hub, AWS ECR, etc.):

```bash
docker tag portfolio-app:latest your-username/portfolio:latest
docker push your-username/portfolio:latest
```

## Notes

- Videos and public assets are included in the build
- The image uses multi-stage build for minimal size
- Read-only volume for public assets (optional in docker-compose.yml)
- Automatic restart policy if container crashes
