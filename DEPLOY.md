# Deployment Guide

This document explains how to develop, build, and deploy the Awesome AI/ML Resources documentation site.

## Prerequisites

- Node.js 18+ and npm
- Docker (for containerized deployment)
- Git

## Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The site will be available at `http://localhost:3000/awesome-ai-ml-resources/`

### 3. Build for Production

```bash
npm run build
```

The static files will be generated in the `build/` directory.

### 4. Serve Production Build Locally

```bash
npm run serve
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t awesome-ai-ml-resources:latest .
```

### Run Docker Container

```bash
docker run -d -p 80:80 --name ai-ml-docs awesome-ai-ml-resources:latest
```

The site will be available at `http://localhost/`

### Using Docker Compose (Optional)

Create a `docker-compose.yml`:

```yaml
version: '3.8'
services:
  docs:
    image: awesome-ai-ml-resources:latest
    ports:
      - "80:80"
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The CI/CD pipeline automatically deploys to GitHub Pages when code is pushed to the `main` branch.

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

Site URL: `https://armankhondker.github.io/awesome-ai-ml-resources/`

### Manual Deployment

```bash
npm run deploy
```

## GitHub Container Registry

Docker images are automatically built and pushed to GitHub Container Registry.

### Pull the Image

```bash
docker pull ghcr.io/armankhondker/awesome-ai-ml-resources:latest
```

### Run from Registry

```bash
docker run -d -p 80:80 ghcr.io/armankhondker/awesome-ai-ml-resources:latest
```

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci-cd.yml`) performs:

| Trigger | Action |
|---------|--------|
| Push to `main` | Build, test, deploy to GitHub Pages, push Docker image |
| Pull Request | Build and test only |

## Project Structure

```
awesome-ai-ml-resources/
├── .github/workflows/    # CI/CD configuration
├── docs/                 # Markdown documentation files
├── src/                  # React components and styles
│   ├── css/             # Custom CSS
│   └── pages/           # Page components
├── static/              # Static assets (images, etc.)
├── docusaurus.config.js # Docusaurus configuration
├── sidebars.js          # Sidebar navigation config
├── package.json         # Node.js dependencies
├── Dockerfile           # Multi-stage Docker build
├── nginx.conf           # Nginx server configuration
└── DEPLOY.md            # This file
```

## Troubleshooting

### Build Fails

1. Clear Docusaurus cache: `npm run clear`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Docker Build Fails

1. Ensure Docker is running
2. Check available disk space
3. Try building with no cache: `docker build --no-cache -t awesome-ai-ml-resources .`

### GitHub Pages Not Updating

1. Check Actions tab for workflow status
2. Verify Pages settings in repository
3. Clear browser cache
