# S3 + CloudFront Deployment Guide

Complete guide for deploying this React application to AWS S3 + CloudFront.

## 🏗️ Project Structure (Optimized for S3/CloudFront)

```
my-digital-hub/
├── src/                      # Source code (React components, pages, etc.)
├── public/                   # Static files (favicon, PDF, images)
│   ├── favicon.ico
│   ├── HieuVTM_CV.pdf
│   └── ...
├── dist/                     # Build output (generated, not in git)
│   ├── index.html           # Main HTML file
│   ├── assets/              # Bundled JS, CSS, images
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD
├── vite.config.ts           # Vite build configuration (optimized for S3)
├── package.json             # Dependencies and scripts
├── aws-deploy.sh            # Manual deployment script
└── .env.example             # Environment variables template
```

## ✅ Optimizations for S3/CloudFront

### Build Configuration (`vite.config.ts`)

- ✅ **Base path set to "/"** - Root deployment
- ✅ **Code splitting** - Separate vendor chunks for better caching
- ✅ **Asset hashing** - Cache busting for assets
- ✅ **Minification** - Smaller bundle sizes
- ✅ **Optimized asset naming** - Organized asset structure

### Deployment Scripts

- ✅ **`npm run deploy:verify`** - Build and verify
- ✅ **`npm run deploy:s3`** - Deploy to S3 (requires env vars)
- ✅ **`aws-deploy.sh`** - Complete deployment script

## 🚀 Quick Deployment

### Option 1: GitHub Actions (Automatic)

**Setup:**
1. Configure GitHub Secrets (see [GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md))
2. Push to `main` branch
3. Workflow automatically builds and deploys

**Manual trigger:**
- Go to GitHub → Actions → "Deploy to AWS S3" → Run workflow

### Option 2: Manual Deployment Script

**One command deployment:**
```bash
chmod +x aws-deploy.sh
./aws-deploy.sh
```

**Requirements:**
- AWS CLI installed and configured
- `.env` file with your AWS credentials (see `.env.example`)

### Option 3: Manual Steps

```bash
# 1. Build the project
npm run build

# 2. Deploy to S3
aws s3 sync dist/ s3://your-bucket-name/ --delete --exact-timestamps

# 3. Set cache headers for index.html
aws s3 cp s3://your-bucket-name/index.html s3://your-bucket-name/index.html \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html" \
  --metadata-directive REPLACE

# 4. Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

## 🔧 Configuration

### Environment Variables

Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` with your values:
```env
VITE_S3_BUCKET_NAME=s3-my-digital-hub-hieuvtm-27-11-25
VITE_CLOUDFRONT_DIST_ID=E3L4809EDE89DE
VITE_AWS_REGION=us-east-1
```

### Build Output Structure

After `npm run build`, the `dist/` folder contains:

```
dist/
├── index.html              # Main HTML (no cache)
├── assets/
│   ├── js/
│   │   ├── index-[hash].js      # Main app bundle
│   │   ├── react-vendor-[hash].js    # React vendor chunk
│   │   └── ui-vendor-[hash].js       # UI vendor chunk
│   ├── css/
│   │   └── index-[hash].css     # Styles
│   ├── images/             # Images from public/
│   └── fonts/              # Font files
├── favicon.ico             # From public/
└── HieuVTM_CV.pdf          # From public/
```

## 📋 Pre-Deployment Checklist

- [ ] AWS account configured
- [ ] S3 bucket created and configured
- [ ] CloudFront distribution created
- [ ] Custom error pages configured (403 → /index.html, 404 → /index.html)
- [ ] S3 bucket policy allows CloudFront access
- [ ] GitHub Secrets configured (for CI/CD)
- [ ] `.env` file created (for manual deployment)

## 🔍 Build Optimization Features

### Code Splitting

The build automatically splits code into:
- **Main bundle** - Your application code
- **React vendor** - React, React DOM, React Router
- **UI vendor** - Radix UI components

This improves caching - vendor chunks rarely change, so users only download new app code on updates.

### Asset Hashing

All assets have hashes in filenames (e.g., `index-a1b2c3.js`):
- ✅ Cache busting - Forces browser to fetch new versions
- ✅ Long cache times - Assets can be cached forever
- ✅ Smaller updates - Only changed files are re-downloaded

### Cache Strategy

- **index.html** - No cache (always fetch latest for routing)
- **Assets** - Long cache (1 year) with immutable flag
- **Static files** - Moderate cache (1 day)

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Assets Not Loading

1. Check assets folder exists in `dist/`
2. Verify S3 sync included assets
3. Check CloudFront origin path (should be empty)
4. Verify custom error pages configured

### React Router Routes 404

**Must configure CloudFront custom error pages:**
- 403 → `/index.html` (HTTP 200)
- 404 → `/index.html` (HTTP 200)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

### Deployment Script Fails

1. Check AWS CLI installed: `aws --version`
2. Verify AWS credentials: `aws sts get-caller-identity`
3. Check `.env` file exists and has correct values
4. Verify S3 bucket name and CloudFront distribution ID

## 📊 Performance Tips

1. **Enable CloudFront compression** - Compress text files (HTML, CSS, JS)
2. **Use CloudFront caching** - Cache static assets aggressively
3. **Enable HTTP/2** - Automatic with CloudFront
4. **Optimize images** - Compress images before adding to `public/`
5. **Lazy load routes** - Code splitting handles this automatically

## 🔄 CI/CD Workflow

GitHub Actions automatically:
1. ✅ Checks out code
2. ✅ Installs dependencies
3. ✅ Builds project (optimized)
4. ✅ Verifies build output
5. ✅ Deploys to S3
6. ✅ Sets cache headers
7. ✅ Invalidates CloudFront cache

**Trigger:** Push to `main` branch or manual trigger

## 📝 Additional Scripts

### Analyze Bundle Size

```bash
npm run build:analyze
```

Opens a visualizer showing bundle composition.

### Preview Production Build

```bash
npm run build
npm run preview
```

Test the production build locally before deploying.

## 🔗 Related Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - General deployment guide
- [LOCAL_DEVELOPMENT.md](./LOCAL_DEVELOPMENT.md) - Local development setup
- [HOW_BUILD_WORKS.md](./HOW_BUILD_WORKS.md) - Build process explanation

## 💰 Cost (Free Tier)

- **S3:** FREE (5GB storage, 20,000 GET requests)
- **CloudFront:** FREE (50GB transfer, 2M requests)
- **GitHub Actions:** FREE (2,000 minutes/month)

**Total: $0/month** (within free tier limits) ✨

---

**Ready to deploy?** Push to `main` branch or run `./aws-deploy.sh`!

