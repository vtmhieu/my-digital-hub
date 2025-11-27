# AWS Deployment Guide

This guide will help you deploy this React + Vite application to AWS using the free tier options.

## Prerequisites

- AWS Account (Free Tier eligible)
- GitHub repository (for CI/CD)
- AWS CLI installed locally (optional, for manual deployment)

## Option 1: AWS Amplify (Recommended - Easiest)

AWS Amplify provides the easiest way to deploy with built-in CI/CD. It's free for 5GB storage and 15GB served content per month.

### Steps:

1. **Push your code to GitHub** (if not already done)

   ```bash
   git push origin main
   ```

2. **Go to AWS Amplify Console**

   - Navigate to https://console.aws.amazon.com/amplify/
   - Click "New app" → "Host web app"
   - Select "GitHub" and authorize AWS Amplify

3. **Configure Repository**

   - Select your repository
   - Select the `main` branch
   - Amplify will automatically detect the build settings from `amplify.yml`

4. **Review and Deploy**

   - Review the build settings (should detect automatically)
   - Click "Save and deploy"
   - Wait for the build to complete (~5-10 minutes)

5. **Custom Domain (Optional)**
   - In Amplify Console, go to "Domain management"
   - Add your custom domain `hieuvtm.com` (or whatever you purchased)
   - Follow the DNS configuration instructions
   - **See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for complete domain purchase and setup guide**

### Cost: FREE (within free tier limits)

---

## Option 2: S3 + CloudFront + GitHub Actions

This option gives you more control but requires more setup.

### Step 1: Create S3 Bucket

1. Go to S3 Console: https://console.aws.amazon.com/s3/
2. Click "Create bucket"
3. Bucket name: `your-app-name` (must be globally unique)
4. Region: Choose closest to you (e.g., `us-east-1`)
5. **Uncheck "Block all public access"** (we need public access for website hosting)
6. Enable "Bucket Versioning" (optional)
7. Click "Create bucket"

### Step 2: Enable Static Website Hosting

1. Click on your bucket
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Enable "Static website hosting"
6. Index document: `index.html`
7. Error document: `index.html` (for React Router)
8. Click "Save changes"

### Step 3: Set Bucket Policy

1. Go to "Permissions" tab
2. Click "Bucket policy"
3. Add this policy (replace `your-bucket-name`):

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::your-bucket-name/*"
		}
	]
}
```

4. Click "Save changes"

### Step 4: Create CloudFront Distribution (Optional but Recommended)

1. Go to CloudFront Console: https://console.aws.amazon.com/cloudfront/
2. Click "Create distribution"
3. Origin domain: Select your S3 bucket (use the website endpoint, e.g., `your-bucket.s3-website-us-east-1.amazonaws.com`)
4. Viewer protocol policy: "Redirect HTTP to HTTPS"
5. Default root object: `index.html`
6. Click "Create distribution"
7. Wait 10-15 minutes for deployment

### Step 5: Configure GitHub Actions

1. **Set up AWS IAM User for GitHub Actions:**

   - Go to IAM Console: https://console.aws.amazon.com/iam/
   - Click "Users" → "Add users"
   - Username: `github-actions-user`
   - Select "Programmatic access"
   - Click "Next: Permissions"
   - Attach policy: `AmazonS3FullAccess` (for simplicity) or create custom policy
   - If using CloudFront, also attach `CloudFrontFullAccess`
   - Create user and **save the Access Key ID and Secret Access Key**

2. **Add GitHub Secrets:**

   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `AWS_ACCESS_KEY_ID`: Your IAM user access key
     - `AWS_SECRET_ACCESS_KEY`: Your IAM user secret key
   - **📖 See [GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md) for detailed step-by-step instructions with screenshots**

3. **Update GitHub Actions Workflow:**

   - Edit `.github/workflows/deploy.yml`
   - Update `S3_BUCKET_NAME` with your bucket name
   - Update `CLOUDFRONT_DISTRIBUTION_ID` with your distribution ID (if using CloudFront)
     - **⚠️ Important:** Use only the ID part (e.g., `d363381gk5ntze`), NOT the full domain (e.g., `d363381gk5ntze.cloudfront.net`)
     - Find it in CloudFront Console → Your distribution → General tab → Distribution ID
   - Update `AWS_REGION` if different

4. **Commit and Push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add CI/CD deployment"
   git push origin main
   ```

### Cost:

- S3: FREE (5GB storage, 20,000 GET requests)
- CloudFront: FREE (50GB data transfer, 2M requests)
- GitHub Actions: FREE (2,000 minutes/month)

---

## Option 3: AWS CodePipeline + CodeBuild

More complex but fully managed within AWS.

### Step 1: Create S3 Bucket (Same as Option 2, Steps 1-3)

### Step 2: Create CodeBuild Project

1. Go to CodeBuild Console: https://console.aws.amazon.com/codebuild/
2. Click "Create build project"
3. Project name: `my-digital-hub-build`
4. Source provider: GitHub (connect your account)
5. Repository: Select your repository
6. Buildspec: Use `buildspec.yml` from repository
7. Environment: Use managed image, Ubuntu, Standard, Node.js 20
8. Service role: Create new or use existing
9. Artifacts: "No artifacts" (we'll upload to S3 in buildspec)
10. Click "Create build project"

### Step 3: Update buildspec.yml

You may need to add S3 sync commands to `buildspec.yml`:

```yaml
post_build:
  commands:
    - echo Build completed on `date`
    - aws s3 sync dist/ s3://your-bucket-name/ --delete
    - aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Step 4: Create CodePipeline

1. Go to CodePipeline Console: https://console.aws.amazon.com/codepipeline/
2. Click "Create pipeline"
3. Pipeline name: `my-digital-hub-pipeline`
4. Source: GitHub (Version 2)
5. Connect to GitHub and select your repository
6. Build: AWS CodeBuild, select your project
7. Deploy: Skip (deployment happens in build step)
8. Create pipeline

### Cost:

- CodeBuild: FREE (100 build minutes/month)
- CodePipeline: FREE (1 active pipeline)

---

## Manual Deployment (For Testing)

If you want to test deployment manually:

```bash
# Install AWS CLI if not already installed
# macOS: brew install awscli

# Configure AWS credentials
aws configure

# Build the project
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name/ --delete

# If using CloudFront, invalidate cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

## Troubleshooting

### React Router 404 Errors (CRITICAL for this app)

Since this app uses React Router with `BrowserRouter`, direct URLs like `/about` or `/projects` will return 404 errors unless configured correctly.

#### For AWS Amplify:

Amplify automatically handles this! No configuration needed.

#### For S3 Static Website Hosting:

1. Go to S3 bucket → Properties → Static website hosting
2. Set Error document to: `index.html`
3. This ensures all routes redirect to index.html, allowing React Router to handle routing

#### For CloudFront:

You MUST add custom error responses:

1. Go to CloudFront distribution → Error pages
2. Click "Create custom error response"
3. HTTP error code: `403: Forbidden`
   - Response page path: `/index.html`
   - HTTP response code: `200: OK`
4. Click "Create custom error response" again
5. HTTP error code: `404: Not Found`
   - Response page path: `/index.html`
   - HTTP response code: `200: OK`

Without these configurations, routes like `/about` or `/projects` will show 404 errors.

### CORS Issues

- S3 buckets don't need CORS for static sites unless you're making API calls to external domains

### Build Failures

- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Amplify/CodeBuild console
- Run `npm run build` locally to test

### GitHub Actions Deployment Issues

- Verify AWS credentials are correctly set in GitHub Secrets
- Check that S3 bucket name matches exactly (case-sensitive)
- Ensure IAM user has proper permissions (S3 and CloudFront if used)
- **CloudFront Distribution ID Error:** If you see "NoSuchDistribution" error, make sure you're using only the distribution ID (e.g., `d363381gk5ntze`), not the full CloudFront domain (e.g., `d363381gk5ntze.cloudfront.net`)
  - Find the correct ID: CloudFront Console → Select your distribution → General tab → "Distribution ID"

---

## Recommended Setup

For the easiest setup with your domain `hieuvtm.`, I recommend:

- **Option 1: AWS Amplify** - Easiest, includes CI/CD, SSL, and custom domain support

For more control and cost optimization:

- **Option 2: S3 + CloudFront + GitHub Actions** - More setup but more flexible
