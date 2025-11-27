# Quick Guide: Add Domain to CloudFront + S3

Since you're using **S3 + CloudFront + GitHub Actions**, follow these steps to add your custom domain.

## Current Status ✅

- ✅ S3 bucket configured
- ✅ CloudFront distribution created
- ✅ GitHub Actions CI/CD working
- ⏳ **Next: Add custom domain**

---

## Steps to Add Domain

### Step 1: Request SSL Certificate (AWS Certificate Manager)

1. **Go to Certificate Manager:**
   - https://console.aws.amazon.com/acm/
   - **⚠️ Important:** Make sure you're in the **`us-east-1` region** (CloudFront requires certificates in us-east-1)

2. **Request Certificate:**
   - Click "Request certificate"
   - Select "Request a public certificate"
   - Click "Next"

3. **Enter Domain Names:**
   - Domain name: `hieuvtm.com` (or your domain)
   - Additional names (optional): `www.hieuvtm.com` (to support both www and non-www)
   - Click "Next"

4. **Validation Method:**
   - Select **"DNS validation"** (recommended)
   - Click "Request"

5. **Add DNS Validation Records:**
   - You'll see DNS records that need to be added
   - Copy the **CNAME name** and **CNAME value** for each domain

### Step 2: Validate Certificate (Add DNS Records)

**If your domain is in Route 53:**
- Certificate Manager can auto-add records
- Click "Create record in Route 53" button
- Done!

**If your domain is with external registrar (Namecheap, GoDaddy, etc.):**

1. Go to your domain registrar's DNS settings
2. Add the CNAME records shown in Certificate Manager:
   - **Type:** CNAME
   - **Name:** Copy from certificate (e.g., `_abc123.hieuvtm.com`)
   - **Value:** Copy from certificate (e.g., `_xyz789.acm-validations.aws.`)
   - **TTL:** Automatic or 300

3. Wait 5-10 minutes for validation
4. Refresh Certificate Manager - status should change to "Issued" ✅

### Step 3: Add Domain to CloudFront Distribution

1. **Go to CloudFront Console:**
   - https://console.aws.amazon.com/cloudfront/
   - Click on your distribution (ID: `E3L4809EDE89DE`)

2. **Edit Distribution:**
   - Click "Edit" button
   - Scroll to "Alternate domain names (CNAMEs)" section
   - Click "Edit"

3. **Add Alternate Domain Names:**
   - Click "Add item"
   - Enter: `hieuvtm.com`
   - Click "Add item" again
   - Enter: `www.hieuvtm.com` (if you want www support)
   - Click "Save changes"

4. **Select SSL Certificate:**
   - Scroll to "Custom SSL certificate" section
   - Click "Edit"
   - Select your certificate from the dropdown (the one you just created)
   - Click "Save changes"

5. **Save All Changes:**
   - Scroll to bottom
   - Click "Save changes"

6. **Wait for Deployment:**
   - CloudFront will deploy the changes (takes 5-15 minutes)
   - Status will show "Deploying" → "Deployed"

### Step 4: Configure DNS Records

Now point your domain to CloudFront:

**If domain is in Route 53:**

1. Go to Route 53: https://console.aws.amazon.com/route53/
2. Select your hosted zone (your domain)
3. Create records:

   **For apex domain (`hieuvtm.com`):**
   - Type: **A Record** (Alias)
   - Name: Leave empty or `@`
   - Alias: **Yes**
   - Route traffic to: **CloudFront distribution**
   - Select your distribution from dropdown
   - Click "Create records"

   **For www subdomain (`www.hieuvtm.com`):**
   - Type: **A Record** (Alias)
   - Name: `www`
   - Alias: **Yes**
   - Route traffic to: **CloudFront distribution**
   - Select your distribution
   - Click "Create records"

**If domain is with external registrar:**

You have two options:

**Option A: Use CNAME (if registrar supports apex CNAME)**
- Add CNAME record:
  - Name: `@` or empty (for apex) and `www` (for subdomain)
  - Value: Your CloudFront domain (e.g., `d363381gk5ntze.cloudfront.net`)

**Option B: Use A Record (if registrar doesn't support apex CNAME)**
1. Get CloudFront IP addresses (changes over time, not recommended)
2. OR better: Use a DNS service like Route 53 that supports alias records

### Step 5: Wait and Test

1. **Wait for DNS propagation:** 5 minutes to 48 hours (usually 15-30 minutes)
2. **Check DNS propagation:** https://dnschecker.org/
3. **Test your site:**
   - `https://hieuvtm.com`
   - `https://www.hieuvtm.com`

---

## Quick Checklist

- [ ] Request SSL certificate in Certificate Manager (us-east-1 region)
- [ ] Add DNS validation records to domain registrar
- [ ] Wait for certificate to be issued
- [ ] Add domain(s) to CloudFront alternate domain names
- [ ] Attach SSL certificate to CloudFront distribution
- [ ] Configure DNS records (A/Alias or CNAME) pointing to CloudFront
- [ ] Wait for DNS propagation
- [ ] Test: `https://hieuvtm.com`

---

## Troubleshooting

### Certificate validation stuck?
- Check DNS records are added correctly
- Wait 5-10 minutes and refresh
- Verify CNAME records using: `nslookup` or online DNS checker

### CloudFront shows "Deploying"?
- Normal! Takes 5-15 minutes
- Wait until status shows "Deployed"

### Domain not resolving?
- Check DNS records are correct
- Verify DNS propagation: https://dnschecker.org/
- Wait longer (DNS can take up to 48 hours, but usually 15-30 min)

### SSL certificate error?
- Make sure certificate is in **us-east-1** region
- Verify certificate is attached to CloudFront distribution
- Check certificate includes your domain name

### Still using CloudFront domain?
- That's fine! Your CloudFront domain (`d363381gk5ntze.cloudfront.net`) will always work
- Custom domain is just a nicer URL

---

## Cost

- **AWS Certificate Manager:** FREE (for use with AWS services)
- **CloudFront:** FREE (within free tier: 50GB transfer, 2M requests/month)
- **Route 53:** First hosted zone FREE (if using Route 53)

**Total: $0** (within free tier limits) ✨

---

That's it! Once DNS propagates, your site will be accessible at `https://hieuvtm.com` 🎉

