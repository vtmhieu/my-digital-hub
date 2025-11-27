# How to Add AWS Secrets to GitHub Actions

Complete step-by-step guide on where and how to add AWS credentials as GitHub Secrets.

## Step-by-Step Instructions

### Step 1: Go to Your GitHub Repository

1. Navigate to your repository on GitHub.com
   - Example: `https://github.com/your-username/my-digital-hub`

### Step 2: Access Repository Settings

1. Click on the **"Settings"** tab at the top of your repository
   - It's the rightmost tab in the repository navigation bar
   - **Note:** You need to be the repository owner or have admin access to see Settings

### Step 3: Navigate to Secrets

1. In the left sidebar, scroll down to **"Secrets and variables"**
2. Click on **"Actions"** under "Secrets and variables"
   - Path: Settings → Secrets and variables → Actions

### Step 4: Add New Secret

1. Click the **"New repository secret"** button (top right)

### Step 5: Add AWS_ACCESS_KEY_ID

1. **Name:** Enter exactly: `AWS_ACCESS_KEY_ID`
   - Must match exactly (case-sensitive)
2. **Secret:** Paste your AWS Access Key ID

   - This is the access key from the IAM user you created
   - Example format: `AKIAIOSFODNN7EXAMPLE`

3. Click **"Add secret"**

### Step 6: Add AWS_SECRET_ACCESS_KEY

1. Click **"New repository secret"** again

2. **Name:** Enter exactly: `AWS_SECRET_ACCESS_KEY`

   - Must match exactly (case-sensitive)

3. **Secret:** Paste your AWS Secret Access Key

   - This is the secret access key from the IAM user
   - Example format: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
   - **⚠️ Important:** You can only see this once when creating the IAM user!

4. Click **"Add secret"**

### Step 7: Verify Secrets Are Added

You should now see both secrets listed:

- `AWS_ACCESS_KEY_ID` (shows as `••••••••`)
- `AWS_SECRET_ACCESS_KEY` (shows as `••••••••`)

**✅ Done!** Your secrets are now configured.

---

## Visual Path Guide

```
GitHub Repository
  └─ Settings (top navigation bar)
      └─ Secrets and variables (left sidebar)
          └─ Actions
              └─ New repository secret (button)
                  └─ Add AWS_ACCESS_KEY_ID
                  └─ Add AWS_SECRET_ACCESS_KEY
```

---

## Getting AWS Credentials

If you haven't created the IAM user yet, here's how:

### Create IAM User in AWS

1. **Go to AWS IAM Console:**

   - https://console.aws.amazon.com/iam/

2. **Create User:**

   - Click "Users" in left sidebar
   - Click "Add users" button
   - Username: `github-actions-user` (or any name)
   - Access type: Select **"Programmatic access"** ✓
   - Click "Next: Permissions"

3. **Attach Policies:**

   - Select "Attach policies directly"
   - Search and select: **`AmazonS3FullAccess`** ✓
   - If using CloudFront, also select: **`CloudFrontFullAccess`** ✓
   - Click "Next"

4. **Review and Create:**

   - Review the settings
   - Click "Create user"

5. **⚠️ IMPORTANT: Save Credentials**
   - **Access key ID**: Copy this (this is your `AWS_ACCESS_KEY_ID`)
   - **Secret access key**: Click "Show" and copy (this is your `AWS_SECRET_ACCESS_KEY`)
   - **⚠️ You can only see the secret key ONCE!** Save it immediately.
   - Optionally, click "Download .csv" to save both keys

---

## Testing the Secrets

After adding secrets, you can test them by:

1. **Make a small change** and push to `main` branch
2. **Go to Actions tab** in your GitHub repository
3. **Watch the workflow run** - it should use your secrets automatically
4. **Check the logs** - if credentials are wrong, you'll see an error

---

## Troubleshooting

### "Settings" tab not visible?

- You need to be the repository **owner** or have **admin** permissions
- If it's not your repo, ask the owner to add you as admin or add the secrets themselves

### Secret name not working?

- Make sure the name matches **exactly** (case-sensitive):
  - ✅ `AWS_ACCESS_KEY_ID`
  - ❌ `aws_access_key_id`
  - ❌ `AWS_ACCESS_KEY`
  - ❌ `AWS_ACCESS_KEY_ID_` (extra space/character)

### Can't find AWS credentials?

- If you lost the secret access key, you'll need to:
  1. Go to IAM Console → Users → Your user
  2. Go to "Security credentials" tab
  3. Delete the old access key
  4. Create a new access key
  5. Update the secret in GitHub

### Workflow failing with "Access Denied"?

- Check that IAM user has correct permissions:
  - `AmazonS3FullAccess` (for S3 deployment)
  - `CloudFrontFullAccess` (if using CloudFront)
- Verify the credentials are correct in GitHub Secrets
- Check that S3 bucket name in workflow matches your actual bucket

---

## Security Best Practices

1. **Never commit secrets to code**

   - Don't put AWS keys in your `.github/workflows/deploy.yml` file
   - Always use `${{ secrets.AWS_ACCESS_KEY_ID }}` syntax

2. **Use least privilege**

   - Instead of `AmazonS3FullAccess`, create a custom policy that only allows:
     - `s3:PutObject`
     - `s3:DeleteObject`
     - `s3:GetObject`
     - `s3:ListBucket`
   - Only on your specific bucket

3. **Rotate keys regularly**

   - Change your access keys every 90 days (good practice)
   - Delete old keys after creating new ones

4. **Restrict IAM user**
   - Only give access to the specific S3 bucket your app uses
   - Don't use root account credentials

---

## Alternative: Environment Secrets (For Organizations)

If you're part of a GitHub Organization, you can also set secrets at the organization level:

1. Go to Organization Settings
2. Secrets and variables → Actions
3. Add secrets at organization level
4. They'll be available to all repositories (or selected ones)

This is useful if you have multiple repos that need the same AWS credentials.

---

## Quick Checklist

- [ ] Created IAM user in AWS with programmatic access
- [ ] Attached `AmazonS3FullAccess` policy (or custom policy)
- [ ] Saved Access Key ID and Secret Access Key
- [ ] Went to GitHub repository → Settings
- [ ] Navigated to Secrets and variables → Actions
- [ ] Added secret: `AWS_ACCESS_KEY_ID`
- [ ] Added secret: `AWS_SECRET_ACCESS_KEY`
- [ ] Verified both secrets are visible in the list
- [ ] Updated workflow file with correct S3 bucket name
- [ ] Tested by pushing to main branch

---

## Direct Links

- **GitHub Repository Settings**: `https://github.com/YOUR_USERNAME/YOUR_REPO/settings`
- **GitHub Secrets Page**: `https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions`
- **AWS IAM Console**: https://console.aws.amazon.com/iam/
- **AWS S3 Console**: https://console.aws.amazon.com/s3/

---

That's it! Your GitHub Actions workflow will now automatically use these secrets when deploying to AWS.
