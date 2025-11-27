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

This is a static React application that can be deployed to AWS using several methods. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Start Options:

1. **AWS Amplify** (Recommended - Easiest)
   - Connect GitHub repository
   - Automatic builds and deployments
   - Free tier includes CI/CD, SSL, and custom domains

2. **S3 + CloudFront + GitHub Actions**
   - More control over deployment process
   - Uses GitHub Actions for CI/CD (free)
   - Manual S3 and CloudFront setup required

3. **AWS CodePipeline + CodeBuild**
   - Fully managed AWS CI/CD
   - Uses `buildspec.yml` for build configuration

All configurations are included in this repository:
- `amplify.yml` - AWS Amplify configuration
- `buildspec.yml` - AWS CodeBuild configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## Domain

I'm using domain `hieuvtm.` to access this site.

### Domain Setup

For complete instructions on buying a domain and connecting it to your AWS deployment, see [DOMAIN_SETUP.md](./DOMAIN_SETUP.md).
