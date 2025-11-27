# Add Namecheap Domain to CloudFront - Step by Step

Complete guide for connecting your Namecheap domain to AWS CloudFront.

## Overview

You'll need to:
1. ✅ Request SSL certificate in AWS (5 min)
2. ✅ Add validation DNS record in Namecheap (2 min)
3. ✅ Add domain to CloudFront (5 min)
4. ✅ Point domain to CloudFront in Namecheap (2 min)
5. ⏳ Wait for propagation (15-30 min)

**Total time: ~30-45 minutes** (most of it waiting)

---

## Step 1: Request SSL Certificate in AWS

### 1.1 Go to Certificate Manager

1. Open: https://console.aws.amazon.com/acm/
2. **⚠️ IMPORTANT:** Make sure you're in the **`us-east-1` region**
   - Check top-right corner of AWS console
   - If not, select "US East (N. Virginia)" from region dropdown
   - CloudFront **requires** certificates to be in us-east-1

### 1.2 Request Certificate

1. Click **"Request certificate"** button
2. Select **"Request a public certificate"**
3. Click **"Next"**

### 1.3 Enter Your Domain

1. **Domain name:** Enter `hieuvtm.com` (or your actual domain)
2. **Additional names (optional):** 
   - Click "Add another name to this certificate"
   - Enter: `www.hieuvtm.com`
   - This allows both `hieuvtm.com` and `www.hieuvtm.com` to work with SSL
3. Click **"Request"**

### 1.4 Get DNS Validation Records

1. You'll see a page with **"Pending validation"** status
2. Click on your certificate to expand it
3. You'll see DNS records needed for validation:
   - **CNAME name** (something like `_abc123.hieuvtm.com`)
   - **CNAME value** (something like `_xyz789.acm-validations.aws.`)
4. **Copy both values** - you'll need them in Step 2

**Example of what you'll see:**
```
Name: _abc123def456.hieuvtm.com
Value: _xyz789abc123.acm-validations.aws.
```

---

## Step 2: Add Validation DNS Record in Namecheap

### 2.1 Access Namecheap DNS Settings

1. Go to: https://www.namecheap.com/
2. Log in to your account
3. Go to **"Domain List"** (top menu)
4. Find your domain (`hieuvtm.com`)
5. Click **"Manage"** button next to it

### 2.2 Add CNAME Record for Validation

1. Scroll down to **"Advanced DNS"** tab
2. Click on the **"Advanced DNS"** tab
3. In the **"Host Records"** section, click **"Add New Record"**
4. Configure the record:
   - **Type:** Select `CNAME Record`
   - **Host:** Paste the **CNAME name** from Step 1.4
     - Example: `_abc123def456`
     - **Note:** Remove the domain part, just the subdomain (everything before `.hieuvtm.com`)
   - **Value:** Paste the **CNAME value** from Step 1.4
     - Example: `_xyz789abc123.acm-validations.aws.`
     - **Important:** Include the trailing dot (`.`) if it's there
   - **TTL:** Select `Automatic` or `30 min`
5. Click the **checkmark** (✓) to save

### 2.3 Add Second Validation Record (if you added www)

If you added `www.hieuvtm.com` to the certificate, repeat Step 2.2 for the second CNAME record.

### 2.4 Wait for Validation

1. Go back to AWS Certificate Manager
2. Refresh the page
3. Wait 5-10 minutes
4. Status should change from "Pending validation" to **"Issued"** ✅

**Note:** Validation can take up to 30 minutes, but usually happens within 5-10 minutes.

---

## Step 3: Add Domain to CloudFront

### 3.1 Edit CloudFront Distribution

1. Go to CloudFront Console: https://console.aws.amazon.com/cloudfront/
2. Click on your distribution (ID: `E3L4809EDE89DE`)
3. Click the **"Edit"** button

### 3.2 Add Alternate Domain Names

1. Scroll down to **"Alternate domain names (CNAMEs)"** section
2. Click **"Edit"**
3. Click **"Add item"**
4. Enter: `hieuvtm.com`
5. If you want www support:
   - Click **"Add item"** again
   - Enter: `www.hieuvtm.com`
6. Click **"Save changes"**

### 3.3 Attach SSL Certificate

1. Scroll down to **"Custom SSL certificate"** section
2. Click **"Edit"**
3. Click the dropdown under "Custom SSL certificate"
4. Select your certificate (should show `hieuvtm.com` and `www.hieuvtm.com`)
5. Click **"Save changes"**

### 3.4 Save All Changes

1. Scroll to the bottom of the page
2. Click **"Save changes"** button
3. You'll see status change to **"Deploying"**

**Wait 5-15 minutes** for CloudFront to deploy the changes. Status will change from "Deploying" to "Deployed".

---

## Step 4: Point Domain to CloudFront in Namecheap

### 4.1 Get CloudFront Distribution Domain

1. Go back to CloudFront Console
2. Click on your distribution
3. In the **"General"** tab, find **"Distribution domain name"**
4. Copy this value (something like: `d363381gk5ntze.cloudfront.net`)
   - This is your CloudFront domain (NOT the distribution ID)

### 4.2 Configure DNS in Namecheap

**Option A: If Namecheap supports Apex CNAME (recommended)**

Some Namecheap configurations support CNAME flattening. Try this first:

1. Go to Namecheap → Domain List → Manage → **"Advanced DNS"** tab
2. Find any existing A record for `@` (apex domain)
   - If it exists, you may need to remove it first
3. Add CNAME Record:
   - **Type:** `CNAME Record`
   - **Host:** `@` (this represents the apex domain)
   - **Value:** Your CloudFront domain (e.g., `d363381gk5ntze.cloudfront.net`)
   - **TTL:** `Automatic`
   - Click ✓ to save

4. Add CNAME Record for www:
   - **Type:** `CNAME Record`
   - **Host:** `www`
   - **Value:** Your CloudFront domain (e.g., `d363381gk5ntze.cloudfront.net`)
   - **TTL:** `Automatic`
   - Click ✓ to save

**Option B: If Namecheap doesn't support Apex CNAME (use A record)**

If Option A doesn't work, you need to use A records. However, CloudFront IPs change, so this is not ideal. Better solution: **Use Route 53** (see Step 4.3 below).

### 4.3 Better Solution: Use Route 53 for DNS (Recommended)

Since Namecheap may not support CNAME on apex domain, it's better to use AWS Route 53 for DNS (still keep domain at Namecheap):

1. **Create Hosted Zone in Route 53:**
   - Go to Route 53: https://console.aws.amazon.com/route53/
   - Click "Hosted zones" → "Create hosted zone"
   - Domain name: `hieuvtm.com`
   - Type: Public hosted zone
   - Click "Create hosted zone"

2. **Get Name Servers from Route 53:**
   - In your hosted zone, you'll see 4 name servers
   - Copy all 4 name servers (something like `ns-123.awsdns-45.com`)

3. **Update Name Servers in Namecheap:**
   - Go to Namecheap → Domain List → Manage
   - Go to **"Nameservers"** section
   - Select **"Custom DNS"**
   - Enter the 4 Route 53 name servers
   - Click ✓ to save

4. **Wait 5-30 minutes** for name server changes to propagate

5. **Create DNS Records in Route 53:**
   - Go back to Route 53 → Your hosted zone
   - Click "Create record"
   
   **For apex domain:**
   - Record name: Leave empty (or `@`)
   - Record type: `A`
   - Alias: **Enable** ✓
   - Route traffic to: Select **"Alias to CloudFront distribution"**
   - Region: Select your region
   - CloudFront distribution: Select your distribution
   - Routing policy: Simple routing
   - Click "Create records"
   
   **For www subdomain:**
   - Record name: `www`
   - Record type: `A`
   - Alias: **Enable** ✓
   - Route traffic to: **"Alias to CloudFront distribution"**
   - Select your distribution
   - Click "Create records"

**Why Route 53?**
- Supports alias records (works like CNAME but for apex domain)
- Free for first hosted zone
- Better integration with CloudFront
- You keep domain at Namecheap, just use Route 53 for DNS

---

## Step 5: Wait and Test

### 5.1 Wait for Changes to Propagate

1. **DNS changes:** 5 minutes to 48 hours (usually 15-30 minutes)
2. **CloudFront deployment:** 5-15 minutes (check CloudFront console for "Deployed" status)
3. **SSL certificate:** Should already be issued from Step 2

### 5.2 Check DNS Propagation

Use this tool to check if DNS is propagating:
- https://dnschecker.org/
- Enter your domain: `hieuvtm.com`
- Look for records pointing to CloudFront

### 5.3 Test Your Site

1. Open browser in incognito/private mode (to avoid cache)
2. Try: `https://hieuvtm.com`
3. Try: `https://www.hieuvtm.com`
4. Both should load your site with SSL certificate! 🎉

---

## Quick Reference Checklist

- [ ] Request SSL certificate in AWS Certificate Manager (us-east-1 region)
- [ ] Add DNS validation CNAME record(s) in Namecheap
- [ ] Wait for certificate to be issued (5-10 minutes)
- [ ] Add domain to CloudFront alternate domain names
- [ ] Attach SSL certificate to CloudFront
- [ ] Wait for CloudFront deployment (5-15 minutes)
- [ ] Configure DNS records (choose one):
  - [ ] Option A: CNAME in Namecheap (if supported)
  - [ ] Option B: Use Route 53 for DNS (recommended)
- [ ] Wait for DNS propagation (15-30 minutes)
- [ ] Test: `https://hieuvtm.com` ✅

---

## Troubleshooting

### Certificate validation stuck?
- Double-check CNAME record in Namecheap (Host and Value must match exactly)
- Wait 10-15 minutes and refresh Certificate Manager
- Verify CNAME using: `nslookup _abc123def456.hieuvtm.com`

### "Apex domain not supported" error in Namecheap?
- Namecheap may not support CNAME on apex domain
- Solution: Use Route 53 for DNS (Step 4.3) - this is actually better!

### CloudFront shows "Deploying"?
- This is normal! Takes 5-15 minutes
- Don't worry, just wait until it shows "Deployed"

### Site not loading?
- Check DNS propagation: https://dnschecker.org/
- Verify CloudFront distribution is "Deployed"
- Check DNS records point to correct CloudFront domain
- Wait longer (DNS can take up to 48 hours, but usually 15-30 min)

### SSL certificate error?
- Make sure certificate is in **us-east-1** region
- Verify certificate includes your domain
- Check certificate is attached to CloudFront distribution

### Name servers not updating?
- Wait 5-30 minutes after updating name servers in Namecheap
- Check name servers using: `nslookup -type=NS hieuvtm.com`
- Verify all 4 Route 53 name servers are set correctly

---

## Cost Breakdown

- **Namecheap Domain:** Already purchased
- **AWS Certificate Manager:** FREE (for use with AWS services)
- **CloudFront:** FREE (within free tier: 50GB transfer, 2M requests/month)
- **Route 53 Hosted Zone:** First one is FREE
- **Route 53 DNS Queries:** First 1 million/month FREE

**Total additional cost: $0** ✨

---

## Summary

Since you have a Namecheap domain, the **easiest path** is:

1. Request SSL certificate in AWS
2. Add validation record in Namecheap
3. Add domain to CloudFront
4. **Use Route 53 for DNS** (recommended - free, works better with CloudFront)
5. Update name servers in Namecheap to point to Route 53

This gives you the best setup while keeping your domain registered at Namecheap!

---

## Need Help?

- **Namecheap Support:** https://www.namecheap.com/support/
- **AWS Certificate Manager Docs:** https://docs.aws.amazon.com/acm/
- **CloudFront Docs:** https://docs.aws.amazon.com/cloudfront/
- **Route 53 Docs:** https://docs.aws.amazon.com/route53/

Good luck! 🚀

