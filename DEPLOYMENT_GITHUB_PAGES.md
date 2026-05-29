# GitHub Pages Deployment Guide

This project is configured to deploy the Vite production build to GitHub Pages.

## What is already configured

- `.github/workflows/deploy.yml` builds the app and deploys `dist/` to GitHub Pages.
- `public/CNAME` sets the custom domain to `www.hieuvtm.site`.
- `public/404.html` and the redirect script in `index.html` keep React Router routes working on direct visits and refreshes.
- `vite.config.ts` uses `base: "/"`, which is correct for a custom domain.

## GitHub setup

1. Push these changes to the `main` branch.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Wait for the `Deploy to GitHub Pages` workflow to finish.

If the workflow fails in the deploy step with `Failed to create deployment (status: 404)`, GitHub Pages is not enabled for the repository yet. Recheck `Settings` > `Pages` and make sure `Source` is set to `GitHub Actions`, then rerun the failed workflow.

## Domain setup

The current custom domain is:

```txt
www.hieuvtm.site
```

If you want a different domain, update `public/CNAME` with only the new domain name.

For the apex/root domain `hieuvtm.site`, keep these DNS `A` records so GitHub Pages can redirect it to `www.hieuvtm.site`:

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For the primary domain `www.hieuvtm.site`, add this DNS `CNAME` record:

```txt
www -> <your-github-username>.github.io
```

After DNS is active, go back to `Settings` > `Pages` and enable `Enforce HTTPS`.

## Verify

After deployment, test:

```txt
https://www.hieuvtm.site/
https://www.hieuvtm.site/about
https://www.hieuvtm.site/projects
https://www.hieuvtm.site/experiences
```
