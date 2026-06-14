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

This project is now configured for **GitHub Pages** with automated deployment from the `main` branch.

### Quick Deploy

```bash
git push origin main
```

- GitHub Actions builds the Vite app
- The generated `dist/` folder is deployed to GitHub Pages
- The custom domain is configured through `public/CNAME`
- React Router direct links are handled through the GitHub Pages fallback

See [DEPLOYMENT_GITHUB_PAGES.md](./DEPLOYMENT_GITHUB_PAGES.md) for the full setup steps.

## Blog

The blog is source-controlled. Posts are edited in `src/content/blogPosts.ts`, so only repository writers can publish changes. See [BLOG_AUTHORING.md](./BLOG_AUTHORING.md).

### Legacy AWS Guides

The old AWS deployment guides are still in the repository for reference, but AWS is no longer the primary deployment target.

- **[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)** - Previous S3 + CloudFront quick start
- **[DEPLOYMENT_S3_CLOUDFRONT.md](./DEPLOYMENT_S3_CLOUDFRONT.md)** - Previous S3/CloudFront guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Previous AWS deployment options

### Project Optimizations

This project is structured for static hosting on GitHub Pages:
- Code splitting for better caching
- Asset hashing for cache busting
- Optimized Vite build configuration
- Automated GitHub Pages deployment
- React Router fallback configured for direct links

Key configurations:
- `.github/workflows/deploy.yml` - GitHub Pages CI/CD
- `public/CNAME` - Custom domain configuration
- `public/404.html` - GitHub Pages route fallback
- `vite.config.ts` - Optimized build config

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

I'm using domain `www.hieuvtm.site` to access this site.

### Domain Setup

For complete instructions on connecting the domain to GitHub Pages, see [DEPLOYMENT_GITHUB_PAGES.md](./DEPLOYMENT_GITHUB_PAGES.md).
