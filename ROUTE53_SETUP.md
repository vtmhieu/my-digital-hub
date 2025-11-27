# Route 53 DNS Setup for hieuvtm.site

Complete guide to configure Route 53 DNS for your domain with existing wildcard SSL certificate.

## Prerequisites ✅

- ✅ Domain: `hieuvtm.site` (registered at Namecheap)
- ✅ Wildcard SSL certificate in ACM (covers `*.hieuvtm.site` and `hieuvtm.site`)
- ✅ CloudFront distribution created

---

## Step 1: Create Route 53 Hosted Zone

### 1.1 Go to Route 53 Console

1. Open: https://console.aws.amazon.com/route53/
2. Click **"Hosted zones"** in the left sidebar

### 1.2 Create Hosted Zone

1. Click **"Create hosted zone"** button
2. Configure:
   - **Domain name:** `hieuvtm.site`
   - **Type:** `Public hosted zone`
   - **Description (optional):** `hieuvtm.site domain`
3. Click **"Create hosted zone"**

### 1.3 Copy Name Servers

1. After creation, you'll see your hosted zone
2. In the **"Name servers"** section, you'll see 4 name servers like:
   ```
   ns-123.awsdns-45.com
   ns-678.awsdns-90.org
   ns-111.awsdns-22.co.uk
   ns-999.awsdns-33.net
   ```
3. **Copy all 4 name servers** - you'll need them for Step 2

---

## Step 2: Update Name Servers in Namecheap

### 2.1 Access Namecheap DNS Settings

1. Go to: https://www.namecheap.com/
2. Log in
3. Go to **"Domain List"** (top menu)
4. Find `hieuvtm.site`
5. Click **"Manage"** button

### 2.2 Update Name Servers

1. Scroll to **"Nameservers"** section
2. Select **"Custom DNS"** (instead of "Namecheap BasicDNS")
3. You'll see fields for Name Server 1, 2, 3, 4
4. Enter the 4 Route 53 name servers (from Step 1.3):
   - **Name Server 1:** `ns-123.awsdns-45.com`
   - **Name Server 2:** `ns-678.awsdns-90.org`
   - **Name Server 3:** `ns-111.awsdns-22.co.uk`
   - **Name Server 4:** `ns-999.awsdns-33.net`
5. Click the **checkmark** (✓) to save

**Note:** Changes can take 5-30 minutes to propagate. Your domain will use Route 53 for DNS now.

---

## Step 3: Add Domain to CloudFront

Before configuring DNS, make sure your domain is added to CloudFront:

### 3.1 Edit CloudFront Distribution

1. Go to CloudFront Console: https://console.aws.amazon.com/cloudfront/
2. Click on your distribution (ID: `E3L4809EDE89DE`)
3. Click **"Edit"** button

### 3.2 Add Alternate Domain Names

1. Scroll to **"Alternate domain names (CNAMEs)"** section
2. Click **"Edit"**
3. Click **"Add item"**
4. Enter: `hieuvtm.site`
5. Click **"Add item"** again
6. Enter: `www.hieuvtm.site` (to support www subdomain)
7. Click **"Save changes"**

### 3.3 Attach Wildcard SSL Certificate

1. Scroll to **"Custom SSL certificate"** section
2. Click **"Edit"**
3. Click the dropdown under "Custom SSL certificate"
4. Select your wildcard certificate (should show `*.hieuvtm.site`)
5. Click **"Save changes"**

### 3.4 Save and Wait for Deployment

1. Scroll to bottom and click **"Save changes"**
2. Status will show **"Deploying"**
3. Wait 5-15 minutes for status to change to **"Deployed"**

---

## Step 4: Create DNS Records in Route 53

### 4.1 Create A Record for Apex Domain (hieuvtm.site)

1. Go back to Route 53 → Hosted zones → `hieuvtm.site`
2. Click **"Create record"** button

3. Configure the record:
   - **Record name:** Leave empty (or enter `@` for apex domain)
   - **Record type:** Select `A - Routes traffic to an IPv4 address`
   - **Alias:** Enable ✓ (toggle ON)
   - **Route traffic to:** Select **"Alias to CloudFront distribution"**
   - **Region:** Select your region (e.g., `US East (N. Virginia)`)
   - **CloudFront distribution:** Select your distribution from dropdown
     - Should show: `E3L4809EDE89DE` or your distribution domain
   - **Routing policy:** `Simple routing`
   - **Evaluate target health:** Leave unchecked

4. Click **"Create records"**

### 4.2 Create A Record for www Subdomain (www.hieuvtm.site)

1. Still in Route 53 hosted zone, click **"Create record"** again

2. Configure the record:
   - **Record name:** Enter `www`
   - **Record type:** Select `A - Routes traffic to an IPv4 address`
   - **Alias:** Enable ✓ (toggle ON)
   - **Route traffic to:** Select **"Alias to CloudFront distribution"**
   - **Region:** Select your region
   - **CloudFront distribution:** Select your distribution
   - **Routing policy:** `Simple routing`

3. Click **"Create records"**

### 4.3 Verify Records Created

You should now see 2 records in your hosted zone:
- **Type A (Alias)** for `hieuvtm.site` → CloudFront distribution
- **Type A (Alias)** for `www.hieuvtm.site` → CloudFront distribution

Plus the default NS and SOA records that Route 53 creates automatically.

---

## Step 5: Wait for DNS Propagation

### 5.1 Check Name Server Propagation

1. Use DNS checker: https://dnschecker.org/
2. Enter: `hieuvtm.site`
3. Select record type: `NS`
4. Check if it shows Route 53 name servers

**Or use command line:**
```bash
nslookup -type=NS hieuvtm.site
```

Should show your Route 53 name servers.

### 5.2 Check DNS Record Propagation

1. Go to: https://dnschecker.org/
2. Enter: `hieuvtm.site`
3. Select record type: `A`
4. Wait for records to show CloudFront IPs across different locations

### 5.3 Typical Timeline

- **Name server changes:** 5 minutes to 48 hours (usually 15-30 minutes)
- **DNS record propagation:** 5 minutes to 24 hours (usually 10-30 minutes)

---

## Step 6: Test Your Site

### 6.1 Test Apex Domain

1. Open browser in **incognito/private mode**
2. Go to: `https://hieuvtm.site`
3. Should load your site with SSL certificate ✅

### 6.2 Test www Subdomain

1. Go to: `https://www.hieuvtm.site`
2. Should also load with SSL certificate ✅

### 6.3 Verify SSL Certificate

- Click the padlock icon in browser
- Should show "Connection is secure"
- Certificate should show `*.hieuvtm.site` (your wildcard cert)

---

## Complete Setup Summary

```
✅ Route 53 hosted zone created for hieuvtm.site
✅ Name servers updated in Namecheap
✅ Domain added to CloudFront alternate domain names
✅ Wildcard SSL certificate attached to CloudFront
✅ DNS A records (alias) created in Route 53:
   - hieuvtm.site → CloudFront
   - www.hieuvtm.site → CloudFront
✅ DNS propagation complete
✅ Site accessible at https://hieuvtm.site
```

---

## Troubleshooting

### Name servers not updating?

**Check name servers:**
```bash
nslookup -type=NS hieuvtm.site
```

**Should show Route 53 name servers.** If not:
- Wait 10-15 more minutes
- Double-check name servers are correct in Namecheap
- Verify you saved the changes in Namecheap

### DNS records not resolving?

**Check DNS records:**
```bash
nslookup hieuvtm.site
```

**Should show CloudFront IPs.** If not:
- Verify records are created in Route 53
- Check alias is enabled and pointing to correct CloudFront distribution
- Wait for DNS propagation (can take up to 24 hours)

### CloudFront not responding?

- Check CloudFront distribution status is **"Deployed"**
- Verify domain is in "Alternate domain names (CNAMEs)"
- Check SSL certificate is attached
- Make sure certificate covers your domain (`*.hieuvtm.site`)

### SSL certificate errors?

- Verify wildcard certificate is in **us-east-1** region
- Check certificate is attached to CloudFront distribution
- Ensure certificate covers `hieuvtm.site` and `*.hieuvtm.site`

### Site loads but no SSL?

- Wait for CloudFront deployment (5-15 minutes)
- Clear browser cache
- Try incognito mode
- Check CloudFront distribution shows "Deployed" status

---

## Advanced: Additional Subdomains

Since you have a wildcard certificate, you can easily add more subdomains:

### Example: Add blog.hieuvtm.site

1. Add to CloudFront alternate domain names:
   - Go to CloudFront → Edit → Alternate domain names
   - Add: `blog.hieuvtm.site`

2. Create DNS record in Route 53:
   - Record name: `blog`
   - Type: `A` (Alias)
   - Route to: CloudFront distribution

3. No SSL certificate needed (wildcard covers it!) ✅

---

## Cost

- **Route 53 Hosted Zone:** First one is **FREE**
- **Route 53 DNS Queries:** First **1 million queries/month FREE**
- **CloudFront:** FREE (within free tier: 50GB transfer, 2M requests/month)
- **SSL Certificate:** Already have it (FREE with ACM)

**Total additional cost: $0** ✨

---

## Quick Reference Commands

### Check name servers
```bash
nslookup -type=NS hieuvtm.site
```

### Check DNS records
```bash
nslookup hieuvtm.site
nslookup www.hieuvtm.site
```

### Check CloudFront distribution
```bash
aws cloudfront get-distribution --id E3L4809EDE89DE
```

---

## Checklist

- [ ] Route 53 hosted zone created
- [ ] Name servers copied from Route 53
- [ ] Name servers updated in Namecheap
- [ ] Domain added to CloudFront alternate domain names (`hieuvtm.site` and `www.hieuvtm.site`)
- [ ] Wildcard SSL certificate attached to CloudFront
- [ ] CloudFront distribution deployed
- [ ] A record (alias) created in Route 53 for apex domain
- [ ] A record (alias) created in Route 53 for www subdomain
- [ ] Waited for DNS propagation (15-30 minutes)
- [ ] Tested: `https://hieuvtm.site` ✅
- [ ] Tested: `https://www.hieuvtm.site` ✅

---

That's it! Your site should now be accessible at `https://hieuvtm.site` with your wildcard SSL certificate! 🎉

