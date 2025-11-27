# Quick Start: Deploy to AWS in 5 Minutes

This is the fastest way to get your site deployed to AWS.

## Prerequisites
- Your code pushed to GitHub
- AWS Account

## Steps

### 1. Go to AWS Amplify
Visit: https://console.aws.amazon.com/amplify/

### 2. Create New App
- Click "New app" → "Host web app"
- Select "GitHub" and authorize if needed
- Select your repository and branch (`main`)

### 3. Configure Build Settings
Amplify will auto-detect settings from `amplify.yml`. Just verify:
- Build command: `npm run build`
- Output directory: `dist`

### 4. Deploy
- Click "Save and deploy"
- Wait 5-10 minutes for first deployment

### 5. Add Custom Domain (Optional)
- After deployment, go to "Domain management"
- Add your domain `hieuvtm.com` (or whatever you purchased)
- Follow DNS configuration instructions
- **Need to buy a domain? See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for complete guide**

## That's it! 🎉

Your site will be live at: `https://[random-id].amplifyapp.com`

And after domain setup: `https://hieuvtm.`

---

## Next Steps
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for other deployment options
- Customize `amplify.yml` if you need different build settings

