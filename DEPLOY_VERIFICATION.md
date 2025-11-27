# Deployment Verification Guide

## ✅ Các cải thiện đã thêm vào deploy.yml

### 1. **Verify Build Output** (Bước mới)
- Kiểm tra xem các file có được build đúng không
- Xác nhận `index.html` có trong `dist/`
- Kiểm tra `assets/` directory
- Xác nhận các file từ `public/` folder có trong `dist/`

### 2. **Cải thiện Deploy Step**
- Thêm `--exact-timestamps` để đảm bảo files được update đúng
- Set cache headers đúng cho `index.html` (no-cache)
- Verify deployment sau khi upload

### 3. **Better Logging**
- Hiển thị danh sách files được deploy
- Hiển thị summary sau khi deploy

---

## 🔍 Cách kiểm tra Deployment

### Sau khi GitHub Actions chạy xong:

1. **Kiểm tra GitHub Actions logs:**
   - Vào repository → "Actions" tab
   - Click vào latest workflow run
   - Xem log của step "Verify build output" và "Deploy to S3"
   - Kiểm tra xem có file nào missing không

2. **Kiểm tra S3 bucket:**
   - Vào S3 Console
   - Open bucket: `s3-my-digital-hub-hieuvtm-27-11-25`
   - Xác nhận có:
     - `index.html` (ở root level)
     - `assets/` folder với CSS/JS files
     - `favicon.ico`, `HieuVTM_CV.pdf`, `placeholder.svg` (nếu có)
     - `robots.txt` (nếu có)

3. **Test CloudFront URL:**
   - Sau khi CloudFront invalidate cache (2-5 phút)
   - Test: `https://[your-cloudfront-domain].cloudfront.net/`

---

## 🐛 Troubleshooting

### Nếu thiếu files trong S3:

**Vấn đề:** Files không được copy từ `public/` folder

**Giải pháp:**
- Vite tự động copy files từ `public/` vào `dist/` khi build
- Kiểm tra `package.json` có script `build` đúng không:
  ```json
  "build": "vite build"
  ```
- Kiểm tra `vite.config.ts` có cấu hình đúng không

**Test local:**
```bash
npm run build
ls -la dist/
# Phải thấy index.html, assets/, và các file từ public/
```

### Nếu S3 sync không hoạt động:

**Kiểm tra:**
1. AWS credentials đúng trong GitHub Secrets
2. IAM user có quyền `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`
3. Bucket name đúng trong workflow file

### Nếu CloudFront không update:

1. **Kiểm tra cache invalidation:**
   - CloudFront Console → Distribution → "Invalidations" tab
   - Xem status của invalidation mới nhất
   - Phải là "Completed"

2. **Đợi đủ thời gian:**
   - Cache invalidation: 2-5 phút
   - Distribution deployment: 5-15 phút

3. **Test với incognito browser:**
   - Clear cache không đủ, phải dùng incognito mode

---

## 📋 Checklist sau mỗi deployment

- [ ] GitHub Actions workflow chạy thành công
- [ ] "Verify build output" step hiển thị tất cả files
- [ ] "Deploy to S3" step sync thành công
- [ ] Files có trong S3 bucket (verify manually)
- [ ] CloudFront invalidation completed
- [ ] Test CloudFront URL hoạt động
- [ ] Test các routes như `/about`, `/projects` hoạt động

---

## 🚀 Để trigger deployment mới

**Option 1: Push code lên main branch**
```bash
git add .
git commit -m "Fix deployment"
git push origin main
```

**Option 2: Manual trigger từ GitHub**
- Repository → "Actions" tab
- Select workflow "Deploy to AWS S3"
- Click "Run workflow" button
- Select branch "main"
- Click "Run workflow"

---

## 📝 Cấu trúc file trong dist/ sau khi build

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js      # JavaScript bundle
│   ├── index-[hash].css     # CSS bundle
│   └── ...
├── favicon.ico         # From public/
├── HieuVTM_CV.pdf      # From public/
├── placeholder.svg     # From public/
└── robots.txt          # From public/ (if exists)
```

**Lưu ý:** Vite tự động copy tất cả files từ `public/` folder vào root của `dist/` khi build.

---

## ✅ File deploy.yml đã được cải thiện

Bây giờ nó sẽ:
1. ✅ Verify build output trước khi deploy
2. ✅ Sync tất cả files từ `dist/` lên S3
3. ✅ Set cache headers đúng
4. ✅ Verify deployment sau khi upload
5. ✅ Invalidate CloudFront cache

**Sau khi push code mới, workflow sẽ tự động chạy và deploy!**

