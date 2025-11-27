# CloudFront Distribution ID - Common Error Fix

## Error Message

```
An error occurred (NoSuchDistribution) when calling the CreateInvalidation operation:
The specified distribution does not exist.
```

## The Problem

You're using the **full CloudFront domain** instead of just the **distribution ID**.

### ❌ Wrong:

```
CLOUDFRONT_DISTRIBUTION_ID: d363381gk5ntze.cloudfront.net
```

### ✅ Correct:

```
CLOUDFRONT_DISTRIBUTION_ID: d363381gk5ntze
```

## How to Find Your Distribution ID

### Method 1: CloudFront Console (Recommended)

1. Go to CloudFront Console: https://console.aws.amazon.com/cloudfront/
2. Click on your distribution
3. In the "General" tab, look for **"Distribution ID"**
4. Copy just the ID part (the alphanumeric string)
   - Example: `d363381gk5ntze`
   - NOT: `d363381gk5ntze.cloudfront.net`

### Method 2: AWS CLI

```bash
aws cloudfront list-distributions --query "DistributionList.Items[*].[Id,Comment,DomainName]" --output table
```

This will show:

- Distribution ID (first column)
- Comment
- Domain Name (the `.cloudfront.net` domain)

## Fix in GitHub Actions Workflow

1. Open `.github/workflows/deploy.yml`
2. Find the line:
   ```yaml
   CLOUDFRONT_DISTRIBUTION_ID: d363381gk5ntze.cloudfront.net
   ```
3. Remove `.cloudfront.net` part:
   ```yaml
   CLOUDFRONT_DISTRIBUTION_ID: d363381gk5ntze
   ```
4. Save and commit

## Quick Reference

| What                           | Format                 | Example                         |
| ------------------------------ | ---------------------- | ------------------------------- |
| **Distribution ID** (use this) | Alphanumeric string    | `d363381gk5ntze`                |
| **CloudFront Domain**          | ID + `.cloudfront.net` | `d363381gk5ntze.cloudfront.net` |
| **Custom Domain**              | Your domain            | `hieuvtm.com`                   |

**For cache invalidation, always use the Distribution ID (first one).**

## Other Common CloudFront Issues

### Invalidating Cache Manually

If you want to invalidate cache manually to test:

```bash
aws cloudfront create-invalidation \
  --distribution-id d363381gk5ntze \
  --paths "/*"
```

Replace `d363381gk5ntze` with your actual distribution ID.

### Checking Distribution Status

```bash
aws cloudfront get-distribution --id d363381gk5ntze
```

This shows distribution details and status.

### Distribution Not Deployed Yet?

If you just created the distribution, wait 10-15 minutes for it to deploy. You'll see "Status: Deployed" in the CloudFront console when it's ready.
