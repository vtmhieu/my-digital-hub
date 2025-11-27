# Domain Purchase & Setup Guide

Complete guide on buying a domain and connecting it to your AWS deployment.

## Step 1: Buy a Domain

### Option A: AWS Route 53 (Recommended if using AWS)

**Pros:**
- Integrated with AWS services
- Easy DNS management in one place
- Automatic SSL certificates
- Simple domain-to-Amplify/CloudFront connection

**Cons:**
- Slightly more expensive (~$12-15/year for .com)

**Steps:**
1. Go to Route 53 Console: https://console.aws.amazon.com/route53/
2. Click "Registered domains" → "Register domain"
3. Search for your domain (e.g., `hieuvtm.com`)
4. Select TLD (.com, .dev, .io, etc.)
5. Complete registration (~$12-15/year for .com)
6. Wait 5-10 minutes for domain to register

**Cost:** ~$12-15/year for .com domain + $0.50/month for hosted zone (first hosted zone is free)

---

### Option B: Namecheap (Popular, Good Prices)

**Pros:**
- Cheap domain prices (~$8-12/year)
- Good renewal rates
- Free WHOIS privacy
- Easy to use interface

**Steps:**
1. Go to https://www.namecheap.com/
2. Search for your domain (e.g., `hieuvtm.com`)
3. Add to cart and checkout
4. Complete registration
5. You'll need to configure DNS after purchase

**Cost:** ~$8-12/year for .com domain

---

### Option C: Other Popular Registrars

- **GoDaddy**: https://www.godaddy.com/ (~$12-15/year)
- **Google Domains**: https://domains.google/ (~$12/year, now managed by Squarespace)
- **Cloudflare Registrar**: https://www.cloudflare.com/products/registrar/ (at-cost pricing, ~$8-9/year)
- **Porkbun**: https://porkbun.com/ (competitive pricing, ~$8-10/year)

---

## Step 2: Connect Domain to AWS Deployment

### Method 1: AWS Amplify (Easiest)

AWS Amplify provides the simplest domain setup with automatic SSL certificates.

#### If you bought domain from Route 53:

1. **Deploy your app to Amplify first** (see [DEPLOYMENT.md](./DEPLOYMENT.md))
2. Go to Amplify Console → Your App → "Domain management"
3. Click "Add domain"
4. Enter your domain (e.g., `hieuvtm.com`)
5. Amplify will automatically detect Route 53 domains
6. Click "Configure domain"
7. Choose subdomain setup:
   - **apex domain only** (e.g., `hieuvtm.com`)
   - **www subdomain** (e.g., `www.hieuvtm.com`)
   - **both** (recommended)
8. Amplify will automatically configure DNS records
9. Wait 15-30 minutes for SSL certificate provisioning
10. Your site is live! 🎉

#### If you bought domain from external registrar (Namecheap, GoDaddy, etc.):

1. **Deploy your app to Amplify first**
2. Go to Amplify Console → Your App → "Domain management"
3. Click "Add domain"
4. Enter your domain (e.g., `hieuvtm.com`)
5. Amplify will give you DNS records to add:
   - **A record** (for apex domain)
   - **CNAME record** (for www subdomain)
6. Go to your domain registrar's DNS settings
7. Add the DNS records provided by Amplify:

**For Namecheap:**
- Go to Namecheap Dashboard → Domain List → Manage
- Go to "Advanced DNS" tab
- Add records:
  - Type: `A Record`
  - Host: `@` (for apex) or `www` (for subdomain)
  - Value: [IP from Amplify]
  - TTL: Automatic
  - Click "Save"

**For GoDaddy:**
- Go to GoDaddy → My Products → DNS
- Add records in DNS Management
- Type: `A` or `CNAME`
- Name: `@` or `www`
- Value: [from Amplify]
- TTL: 1 hour

8. Return to Amplify Console and click "Verify"
9. Wait 15-30 minutes for DNS propagation and SSL certificate
10. Your site is live! 🎉

**SSL Certificate:** Automatically provided by AWS Certificate Manager (ACM) - FREE

---

### Method 2: CloudFront + S3

If you're using S3 + CloudFront deployment, you need to:

#### Step 1: Request SSL Certificate in AWS Certificate Manager

1. Go to Certificate Manager: https://console.aws.amazon.com/acm/
2. Click "Request certificate"
3. Select "Request a public certificate"
4. Enter your domain:
   - Domain name: `hieuvtm.com`
   - Additional names: `www.hieuvtm.com` (for www support)
5. Choose validation method: **DNS validation** (recommended)
6. Click "Request"
7. You'll get DNS validation records to add to your registrar

#### Step 2: Add DNS Validation Records

**If domain in Route 53:**
- Certificate Manager can auto-validate (click "Create record in Route 53")

**If domain in external registrar:**
- Add the CNAME records shown in Certificate Manager to your domain's DNS

#### Step 3: Add Domain to CloudFront Distribution

1. Go to CloudFront Console → Your Distribution
2. Click "Edit" → "General"
3. Click "Edit" in "Alternate domain names (CNAMEs)"
4. Add:
   - `hieuvtm.com`
   - `www.hieuvtm.com`
5. SSL Certificate: Select your certificate from ACM
6. Save changes

#### Step 4: Configure DNS Records

**If domain in Route 53:**
1. Go to Route 53 → Hosted zones → Your domain
2. Create records:
   - **A Record (Alias)** for `hieuvtm.com`
     - Type: `A`
     - Alias: Yes
     - Route traffic to: CloudFront distribution
     - Distribution: Select your CloudFront distribution
   - **A Record (Alias)** for `www.hieuvtm.com`
     - Same as above

**If domain in external registrar:**
1. Get CloudFront distribution domain name (e.g., `d1234abcd.cloudfront.net`)
2. Go to your registrar's DNS settings
3. Add CNAME records:
   - `hieuvtm.com` → `your-cloudfront-domain.cloudfront.net`
   - `www.hieuvtm.com` → `your-cloudfront-domain.cloudfront.net`

**Note:** Some registrars don't allow CNAME on apex domain. If so:
- Use A record with CloudFront IP (check CloudFront docs for IP ranges)
- OR use a DNS service like Route 53 that supports alias records

#### Step 5: Wait for Propagation

- DNS changes: 5 minutes to 48 hours (usually 15-30 minutes)
- SSL certificate: Usually ready in 5-10 minutes after DNS validation
- CloudFront update: 5-15 minutes

---

## Step 3: Configure www vs apex Domain

### Best Practice: Support Both

You should support both:
- `hieuvtm.com` (apex domain)
- `www.hieuvtm.com` (www subdomain)

### AWS Amplify:
- Automatically supports both when you enable both in domain setup

### CloudFront:
- Add both to alternate domain names (CNAMEs)
- Request SSL certificate for both domains
- Configure DNS for both

### Redirect www to apex (Optional):

If you want to redirect `www.hieuvtm.com` → `hieuvtm.com`:

**In CloudFront:**
- Create a second CloudFront distribution for www
- Use CloudFront Function or Lambda@Edge to redirect
- Point www DNS to this redirect distribution

**In Amplify:**
- Amplify handles this automatically when you enable both domains

---

## DNS Record Types Explained

### A Record
- Points domain to an IP address
- Used for apex domains (`hieuvtm.com`)

### CNAME Record
- Points domain to another domain name
- Used for subdomains (`www.hieuvtm.com`)
- Cannot be used for apex domain (some registrars)

### ALIAS/ANAME Record (Route 53 specific)
- Like CNAME but works for apex domains
- Routes to AWS resources (CloudFront, S3, etc.)

---

## SSL Certificate (HTTPS)

### AWS Amplify:
- **Automatic** - AWS manages SSL certificates via ACM
- **Free** - No cost for SSL certificates
- **Auto-renewal** - Certificates automatically renew

### CloudFront:
- Use AWS Certificate Manager (ACM)
- **Free** for CloudFront distributions
- Must request and validate manually
- Auto-renews

---

## Cost Breakdown

### Domain Purchase:
- `.com` domain: $8-15/year (varies by registrar)
- `.dev` domain: ~$15-20/year
- `.io` domain: ~$30-40/year

### AWS Costs (Free Tier):
- **Route 53 Hosted Zone**: First zone FREE, then $0.50/month per zone
- **Route 53 DNS Queries**: First 1 million queries/month FREE
- **AWS Certificate Manager**: FREE (for use with AWS services)
- **CloudFront**: FREE (50GB data transfer, 2M requests/month)

### Total Annual Cost (Free Tier):
- Domain: $8-15/year
- AWS hosting: $0/year (within free tier limits)
- **Total: ~$8-15/year** ✨

---

## Troubleshooting

### Domain Not Resolving
- Wait 15-30 minutes for DNS propagation
- Check DNS records are correct using: https://dnschecker.org/
- Verify DNS records match what AWS requires

### SSL Certificate Issues
- Ensure DNS validation records are added correctly
- Wait for certificate provisioning (can take up to 30 minutes)
- Check Certificate Manager console for validation status

### www Not Working
- Verify both domains are added to CloudFront CNAMEs
- Check SSL certificate includes both domains
- Ensure DNS records are configured for www subdomain

### HTTPS Not Working
- Wait for SSL certificate to be issued (5-30 minutes)
- Ensure certificate is attached to CloudFront distribution
- Clear browser cache and try again

---

## Quick Checklist

- [ ] Purchase domain from registrar
- [ ] Deploy app to AWS (Amplify or S3/CloudFront)
- [ ] Request SSL certificate (if using CloudFront)
- [ ] Add domain to AWS service (Amplify or CloudFront)
- [ ] Configure DNS records at registrar
- [ ] Wait for DNS propagation (15-30 minutes)
- [ ] Wait for SSL certificate (5-30 minutes)
- [ ] Test: Visit `https://hieuvtm.com` and `https://www.hieuvtm.com`
- [ ] Celebrate! 🎉

---

## Recommended Setup for Your Project

Given you want `hieuvtm.` domain:

1. **Buy domain** from Route 53 or Namecheap
2. **Deploy to AWS Amplify** (easiest setup)
3. **Add domain in Amplify Console**
4. **Follow DNS instructions** from Amplify
5. **Wait 30 minutes** for everything to propagate
6. **Done!** Your site will be live at `https://hieuvtm.com`

This is the simplest path and everything (SSL, DNS, hosting) is managed in one place.

---

## Need Help?

- **AWS Amplify Docs**: https://docs.aws.amazon.com/amplify/
- **Route 53 Docs**: https://docs.aws.amazon.com/route53/
- **CloudFront Docs**: https://docs.aws.amazon.com/cloudfront/
- **DNS Checker**: https://dnschecker.org/ (verify DNS propagation)

