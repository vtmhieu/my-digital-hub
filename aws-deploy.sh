#!/bin/bash

# AWS S3 + CloudFront Deployment Script
# Usage: ./aws-deploy.sh

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting AWS S3 + CloudFront Deployment${NC}\n"

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
    echo -e "${GREEN}✅ Loaded .env file${NC}"
else
    echo -e "${YELLOW}⚠️  No .env file found. Using default values.${NC}"
fi

# Set defaults if not in .env
S3_BUCKET_NAME=${VITE_S3_BUCKET_NAME:-"s3-my-digital-hub-hieuvtm-27-11-25"}
CLOUDFRONT_DIST_ID=${VITE_CLOUDFRONT_DIST_ID:-"E3L4809EDE89DE"}
AWS_REGION=${VITE_AWS_REGION:-"us-east-1"}

echo -e "\n${YELLOW}Configuration:${NC}"
echo "  S3 Bucket: ${S3_BUCKET_NAME}"
echo "  CloudFront Distribution: ${CLOUDFRONT_DIST_ID}"
echo "  AWS Region: ${AWS_REGION}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "\n${RED}❌ AWS CLI is not installed.${NC}"
    echo "Install it from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "\n${RED}❌ AWS credentials not configured.${NC}"
    echo "Run: aws configure"
    exit 1
fi

echo -e "\n${GREEN}✅ AWS CLI configured${NC}"

# Step 1: Build the project
echo -e "\n${YELLOW}📦 Building project...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "\n${RED}❌ Build failed - dist/ folder not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed${NC}"

# Step 2: Verify build output
echo -e "\n${YELLOW}🔍 Verifying build output...${NC}"
if [ ! -f "dist/index.html" ]; then
    echo -e "${RED}❌ index.html not found in dist/${NC}"
    exit 1
fi

if [ ! -d "dist/assets" ]; then
    echo -e "${YELLOW}⚠️  assets/ directory not found${NC}"
fi

echo -e "${GREEN}✅ Build verification passed${NC}"

# Step 3: Deploy to S3
echo -e "\n${YELLOW}☁️  Deploying to S3...${NC}"
aws s3 sync dist/ s3://${S3_BUCKET_NAME}/ \
    --delete \
    --exact-timestamps \
    --region ${AWS_REGION}

echo -e "${GREEN}✅ Files uploaded to S3${NC}"

# Step 4: Set cache headers
echo -e "\n${YELLOW}📝 Setting cache headers...${NC}"

# No cache for index.html
aws s3 cp s3://${S3_BUCKET_NAME}/index.html s3://${S3_BUCKET_NAME}/index.html \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html" \
    --metadata-directive REPLACE \
    --region ${AWS_REGION}

echo -e "${GREEN}✅ Cache headers set${NC}"

# Step 5: Invalidate CloudFront cache
echo -e "\n${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id ${CLOUDFRONT_DIST_ID} \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text \
    --region ${AWS_REGION})

echo -e "${GREEN}✅ CloudFront cache invalidation created: ${INVALIDATION_ID}${NC}"

# Step 6: Summary
echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo "  1. Wait 2-5 minutes for CloudFront cache invalidation"
echo "  2. Wait 5-15 minutes for CloudFront distribution to update"
echo "  3. Test your site: https://your-cloudfront-domain.cloudfront.net/"
echo -e "\n${YELLOW}Check invalidation status:${NC}"
echo "  aws cloudfront get-invalidation --distribution-id ${CLOUDFRONT_DIST_ID} --id ${INVALIDATION_ID}"
echo ""

