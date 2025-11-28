# Quick Start: Deploy to S3 + CloudFront

## ✅ Project Structure Optimized for AWS

This project is now fully optimized for AWS S3 + CloudFront deployment with:

- ✅ **Optimized Vite build configuration**
- ✅ **Code splitting** for better caching
- ✅ **Asset hashing** for cache busting
- ✅ **Automated CI/CD** via GitHub Actions
- ✅ **Manual deployment scripts**

## 🚀 Deploy Options

### Option 1: GitHub Actions (Recommended)

**Automatic deployment on every push:**

```bash
git push origin main
```

That's it! The workflow automatically:
1. Builds your project
2. Deploys to S3
3. Invalidates CloudFront cache

**Manual trigger:**
- GitHub → Actions → "Deploy to AWS S3" → Run workflow

### Option 2: Manual Script

```bash
# Make script executable (first time only)
chmod +x aws-deploy.sh

# Deploy
./aws-deploy.sh
```

**Requirements:**
- AWS CLI installed
- `.env` file (copy from `env.example`)

### Option 3: NPM Scripts

```bash
# Build and verify
npm run deploy:verify

# Deploy to S3 (requires env vars)
npm run deploy:s3

# Invalidate CloudFront cache
npm run deploy:invalidate
```

## 📁 Project Structure

```
my-digital-hub/
├── src/              # React source code
├── public/           # Static files (favicon, PDF, etc.)
├── dist/             # Build output (generated, not in git)
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
├── vite.config.ts    # Optimized build config
├── package.json      # Scripts and dependencies
├── aws-deploy.sh     # Manual deployment script
└── env.example       # Environment variables template
```

## ⚙️ Configuration

### Environment Variables

1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` with your values:
   ```env
   VITE_S3_BUCKET_NAME=s3-my-digital-hub-hieuvtm-27-11-25
   VITE_CLOUDFRONT_DIST_ID=E3L4809EDE89DE
   VITE_AWS_REGION=us-east-1
   ```

### Build Optimizations

The project is configured with:

- **Base path:** `/` (root deployment)
- **Code splitting:** Separate vendor chunks
- **Asset hashing:** Cache busting
- **Minification:** Smaller bundles
- **Modern targets:** ES2015+ browsers

## 📚 Documentation

- **[DEPLOYMENT_S3_CLOUDFRONT.md](./DEPLOYMENT_S3_CLOUDFRONT.md)** - Complete deployment guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - General AWS deployment guide
- **[LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md)** - Local development setup

## 🔧 Build Output

After building (`npm run build`), your `dist/` folder will have:

```
dist/
├── index.html           # Main HTML
├── assets/
│   ├── index-[hash].js      # App bundle
│   ├── react-vendor-[hash].js   # React vendor
│   ├── ui-vendor-[hash].js      # UI vendor
│   ├── index-[hash].css         # Styles
│   └── ... (images, fonts)
├── favicon.ico
└── HieuVTM_CV.pdf
```

## ✅ Pre-Deployment Checklist

- [ ] S3 bucket created
- [ ] CloudFront distribution created
- [ ] Custom error pages configured (403/404 → /index.html)
- [ ] S3 bucket policy allows CloudFront
- [ ] GitHub Secrets configured (for CI/CD)
- [ ] `.env` file created (for manual deploy)

## 🎯 Quick Commands

```bash
# Development
npm run dev              # Start dev server (port 8080)

# Build
npm run build            # Build for production
npm run preview          # Preview production build

# Deploy
./aws-deploy.sh          # Full deployment script
npm run deploy:verify    # Build and verify

# Analyze
npm run build:analyze    # Analyze bundle size
```

## 💡 Key Features

1. **Automatic CI/CD** - Push to `main` = auto deploy
2. **Optimized builds** - Code splitting and minification
3. **Smart caching** - Long cache for assets, no cache for HTML
4. **React Router support** - Configured for SPA routing
5. **Easy manual deploy** - One-command deployment script

## 🆘 Need Help?

See detailed guides:
- **Deployment:** [DEPLOYMENT_S3_CLOUDFRONT.md](./DEPLOYMENT_S3_CLOUDFRONT.md)
- **Troubleshooting:** [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting)
- **Local Setup:** [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md)

---

**Ready to deploy?** Just push to `main` branch! 🚀

