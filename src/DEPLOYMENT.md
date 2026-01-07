# McCool Oilfield Services - Deployment Guide

## Overview
This guide walks through deploying the McCool Oilfield Services website using GitHub + Vercel + Domain Transfer from Wix.

---

## STEP 1: GitHub Setup

### 1.1 Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name**: `mccool-oilfield-website` (or your preferred name)
   - **Description**: "McCool Oilfield Services professional website"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### 1.2 Upload Your Code to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. File → Add Local Repository → Browse to your project folder
4. Click "Publish repository"
5. Done! ✅

**Option B: Using Command Line**
```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - McCool Oilfield Services website"

# Connect to GitHub (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option C: Using GitHub Web Interface (No Command Line)**
1. In your new GitHub repository, click **"uploading an existing file"**
2. Drag and drop ALL your project files
3. Add commit message: "Initial commit - McCool Oilfield Services website"
4. Click **"Commit changes"**

---

## STEP 2: Vercel Deployment

### 2.1 Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### 2.2 Import Your Repository

1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find your repository (`mccool-oilfield-website`)
3. Click **"Import"**

### 2.3 Configure Project Settings

Vercel will auto-detect your project. Configure these settings:

- **Framework Preset**: Vite (should auto-detect)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (should auto-detect)
- **Output Directory**: `dist` (should auto-detect)
- **Install Command**: `npm install` (should auto-detect)

### 2.4 Deploy!

1. Click **"Deploy"**
2. Wait 1-3 minutes for build to complete
3. You'll get a URL like: `https://mccool-oilfield-website.vercel.app`
4. **Test your site!** Click the URL and verify everything works

---

## STEP 3: Custom Domain Setup (From Wix)

### 3.1 Get Your Domain Ready

**Current State**: Your domain is registered/hosted on Wix
**Goal**: Point it to your Vercel site

You have **2 options**:

#### **Option A: Keep Domain on Wix, Just Point It** (Easier, Faster)
- Domain stays registered with Wix
- You just change DNS settings to point to Vercel
- Takes 5-10 minutes to set up, 1-24 hours to propagate

#### **Option B: Transfer Domain Away from Wix** (More Control)
- Move domain registration to a different registrar (Namecheap, Google Domains, etc.)
- Takes 5-7 days for transfer to complete
- More complex but gives you full control

**Recommendation**: Start with **Option A** to get live quickly. You can transfer later if needed.

---

### 3.2 Add Domain to Vercel

1. In your Vercel project, go to **"Settings"** → **"Domains"**
2. Enter your domain name (e.g., `mccooloilfield.com`)
3. Click **"Add"**
4. Vercel will show you DNS records you need to add

**You'll see something like:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open!** You'll need these values in the next step.

---

### 3.3 Update DNS Settings on Wix

1. Log in to your [Wix account](https://www.wix.com)
2. Go to **"Domains"** → Select your domain
3. Click **"Manage DNS Records"** or **"Advanced DNS"**

**Important Wix Note**: Wix may try to keep you on their platform. Look for:
- "Point Domain" or "Connect Domain to External Site"
- "Advanced DNS Settings"
- "Use External Nameservers"

4. **Update the records**:
   - Delete any existing `A` records pointing to Wix
   - Delete any existing `CNAME` for `www` pointing to Wix
   - Add the **A record** from Vercel (usually `76.76.21.21`)
   - Add the **CNAME record** from Vercel for `www`

5. **Save changes**

---

### 3.4 Verify Domain on Vercel

1. Return to Vercel → **Settings** → **Domains**
2. Wait a few minutes for DNS to update
3. Vercel will automatically verify your domain
4. Once verified, you'll see a ✅ green checkmark

**DNS Propagation Time**: 
- Minimum: 5-10 minutes
- Maximum: 48 hours (usually much faster)
- Check status: [whatsmydns.net](https://www.whatsmydns.net/)

---

## STEP 4: Post-Deployment Checklist

### ✅ Test Everything

- [ ] Visit your custom domain (e.g., `https://mccooloilfield.com`)
- [ ] Test all 5 pages (Home, Services, About, Contact, Gallery)
- [ ] Submit both contact forms and verify emails arrive
- [ ] Test on mobile device
- [ ] Test gallery lightbox
- [ ] Test carousel navigation
- [ ] Verify all phone/email links work
- [ ] Check page load speed

### ✅ SSL Certificate (HTTPS)

- Vercel automatically provides free SSL
- Your site will be `https://` within minutes
- If you see "Not Secure", wait 10-15 minutes for SSL to provision

### ✅ SEO & Performance

1. **Add Site to Google Search Console**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain
   - Verify ownership (Vercel makes this easy)

2. **Set up Google Analytics** (Optional):
   - Get tracking code from [analytics.google.com](https://analytics.google.com)
   - Add to your site in a future update

---

## Troubleshooting

### Issue: "Domain not found" or "This site can't be reached"
**Solution**: DNS hasn't propagated yet. Wait 30 minutes and try again.

### Issue: Wix won't let me change DNS
**Solution**: You may need to:
1. Cancel Wix site/hosting (but keep domain)
2. OR transfer domain to another registrar first
3. Contact Wix support to "unlock domain for external use"

### Issue: Forms not working after deployment
**Solution**: 
- Formspree endpoint is already configured: `https://formspree.io/f/xkogdwkv`
- Should work immediately
- If issues, verify the endpoint in Formspree dashboard

### Issue: Images not loading
**Solution**: All images use the `figma:asset` scheme which is handled by Figma Make. This should work automatically on Vercel.

---

## Future Updates

To update your website after initial deployment:

1. Make changes to your code locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel automatically detects changes and redeploys (2-3 minutes)
4. No manual deployment needed! 🎉

---

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: Available in dashboard
- **Wix Domain Help**: [support.wix.com/en/domains](https://support.wix.com/en/domains)
- **DNS Propagation Checker**: [whatsmydns.net](https://www.whatsmydns.net/)

---

## Quick Summary

1. **GitHub**: Push code → Repository created ✅
2. **Vercel**: Import repo → Auto-deploy → Get URL ✅
3. **Domain**: Add to Vercel → Update Wix DNS → Wait for propagation ✅
4. **Done**: Professional website live! 🚀

**Estimated Total Time**: 30-60 minutes (plus DNS propagation wait)
