# About this project

This project contains my info, which are CV, experiences, projects, and daily lifes stuff if you want to check out.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project is **optimized for AWS S3 + CloudFront deployment** with automated CI/CD. See deployment guides below.

### 🚀 Quick Deploy

**Option 1: GitHub Actions (Recommended)**
```bash
git push origin main
```
- Automatic build and deployment
- Configured and ready to use
- See [README_DEPLOYMENT.md](./README_DEPLOYMENT.md) for quick start

**Option 2: Manual Script**
```bash
./aws-deploy.sh
```
- One-command deployment
- Requires AWS CLI and `.env` file

### 📚 Deployment Guides

- **[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)** - Quick start guide (S3 + CloudFront)
- **[DEPLOYMENT_S3_CLOUDFRONT.md](./DEPLOYMENT_S3_CLOUDFRONT.md)** - Complete S3/CloudFront guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - All deployment options (Amplify, S3, CodePipeline)

### ⚙️ Project Optimizations

This project is structured for optimal S3/CloudFront deployment:
- ✅ Code splitting for better caching
- ✅ Asset hashing for cache busting
- ✅ Optimized build configuration
- ✅ Automated CI/CD pipeline
- ✅ React Router support configured

All configurations are included:
- `.github/workflows/deploy.yml` - GitHub Actions CI/CD
- `vite.config.ts` - Optimized build config
- `aws-deploy.sh` - Manual deployment script
- `amplify.yml` - AWS Amplify config (alternative)
- `buildspec.yml` - AWS CodeBuild config (alternative)

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:8080/**

For detailed local development instructions, see [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md).

## Domain

I'm using domain `hieuvtm.site` to access this site.

### Domain Setup

For complete instructions on buying a domain and connecting it to your AWS deployment, see [DOMAIN_SETUP.md](./DOMAIN_SETUP.md).
