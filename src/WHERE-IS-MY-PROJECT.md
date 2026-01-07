# 📍 WHERE IS MY PROJECT FOLDER?

## Your Project Lives in Figma Make

Your McCool Oilfield Services website currently exists **inside Figma Make's web environment** - not on your local computer.

---

## 🔽 HOW TO GET IT ONTO YOUR COMPUTER

### Step 1: Export from Figma Make

1. **Look for the "Export" or "Download" button** in Figma Make
   - Usually in the **top-right corner**
   - Or in a **File menu** / **three-dot menu (⋮)**
   
2. **Click Export/Download**
   - This will download a `.zip` file to your Downloads folder
   - File name will be something like: `mccool-oilfield-services.zip`

---

### Step 2: Extract the ZIP File

#### On Windows:
```
1. Open your Downloads folder: C:\Users\YourName\Downloads\
2. Find: mccool-oilfield-services.zip
3. Right-click → "Extract All..."
4. Choose location: C:\Users\YourName\Desktop\mccool-oilfield-services\
5. Click "Extract"
```

#### On Mac:
```
1. Open your Downloads folder: ~/Downloads/
2. Find: mccool-oilfield-services.zip
3. Double-click to extract
4. Move the extracted folder to: ~/Desktop/mccool-oilfield-services/
```

---

### Step 3: Open Terminal in Your Project Folder

#### Windows (Command Prompt or PowerShell):
```
1. Open File Explorer
2. Navigate to: C:\Users\YourName\Desktop\mccool-oilfield-services\
3. Click in the address bar and type: cmd
4. Press Enter
```

#### Mac (Terminal):
```
1. Open Terminal app
2. Type: cd ~/Desktop/mccool-oilfield-services
3. Press Enter
```

#### Alternative (Works on Both):
- **Windows:** Right-click inside folder → "Open in Terminal"
- **Mac:** Right-click folder → "New Terminal at Folder"

---

### Step 4: Verify You're in the Right Place

Once you're in the terminal, type:

#### Windows:
```bash
dir
```

#### Mac/Linux:
```bash
ls -la
```

**You should see these files:**
```
.gitignore              ← Git ignore file
.env.example            ← Environment template
package.json            ← NPM dependencies
vite.config.ts          ← Vite configuration
tsconfig.json           ← TypeScript config
vercel.json             ← Vercel deployment config
index.html              ← HTML entry
main.tsx                ← React entry
App.tsx                 ← Router
Home.tsx                ← Pages
Services.tsx
About.tsx
Contact.tsx
Gallery.tsx
components/             ← Components folder
styles/                 ← Styles folder
README.md               ← Documentation
```

✅ **If you see these files, you're in the right folder!**

---

## 🚀 AFTER YOU DOWNLOAD: PUSH TO GITHUB

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"+"** icon → **"New repository"**
3. Name: `mccool-oilfield-services`
4. **Do NOT** check "Initialize with README"
5. Click **"Create repository"**

---

### Step 2: Initialize Git and Push

From your project folder in terminal, run:

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "McCool Oilfield Services - Production ready for Vercel"

# Connect to GitHub (REPLACE with YOUR username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/mccool-oilfield-services.git

# Push
git branch -M main
git push -u origin main
```

**Example (replace johnsmith with YOUR GitHub username):**
```bash
git remote add origin https://github.com/johnsmith/mccool-oilfield-services.git
git branch -M main
git push -u origin main
```

---

### Step 3: Enter GitHub Credentials

GitHub will ask for:
- **Username:** your GitHub username
- **Password:** use a **Personal Access Token** (not your actual password)

#### How to Get a Personal Access Token:
1. GitHub → Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Give it `repo` permissions
4. Copy the token
5. Use it as your "password" when Git asks

---

## ✅ WHAT GETS UPLOADED TO GITHUB

### Included (These WILL upload):
- ✅ All `.tsx` files (App, main, pages, components)
- ✅ All config files (package.json, vite.config.ts, tsconfig.json, vercel.json)
- ✅ `.gitignore` and `.env.example`
- ✅ `styles/` folder
- ✅ All documentation (README, DEPLOYMENT, etc.)

### Excluded (These WON'T upload - handled by .gitignore):
- ❌ `node_modules/` (Vercel installs these)
- ❌ `dist/` (Vercel builds this)
- ❌ `.env` (secrets - never upload this!)

---

## 🎯 AFTER GITHUB UPLOAD: DEPLOY TO VERCEL

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New..."** → **"Project"**
4. **Import** your `mccool-oilfield-services` repository
5. Vercel auto-detects everything
6. Click **"Deploy"**
7. Wait 2-3 minutes
8. Get your live URL! 🎉

---

## 📁 YOUR PROJECT LOCATION SUMMARY

```
Figma Make (Web)
    ↓
    EXPORT/DOWNLOAD
    ↓
Downloads Folder (ZIP file)
    ↓
    EXTRACT
    ↓
Desktop/mccool-oilfield-services/ (Your working folder)
    ↓
    GIT PUSH
    ↓
GitHub Repository (github.com/YOUR-USERNAME/mccool-oilfield-services)
    ↓
    VERCEL IMPORT & DEPLOY
    ↓
Live Website! (https://mccool-oilfield-services.vercel.app)
```

---

## 🆘 COMMON ISSUES

### "I can't find the Export button in Figma Make"
- Look in the top-right corner
- Check File menu
- Check three-dot menu (⋮)
- Try Share → Download

### "Git says 'not a git repository'"
- Make sure you ran `git init` first
- Make sure you're in the project folder (run `dir` or `ls` to verify)

### "Git says 'permission denied'"
- You need a Personal Access Token (not your GitHub password)
- See "How to Get a Personal Access Token" above

### "Too many files to upload"
- Make sure `.gitignore` exists in your project folder
- It should exclude `node_modules/` and `dist/`

---

## ✅ QUICK CHECKLIST

- [ ] Download/Export project from Figma Make
- [ ] Extract ZIP file to Desktop or preferred location
- [ ] Open Terminal in that folder
- [ ] Run `dir` (Windows) or `ls` (Mac) to verify files
- [ ] Create GitHub repository
- [ ] Run git commands to push
- [ ] Import to Vercel and deploy

---

**Need help? Check the other documentation files:**
- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `FIXES-COMPLETE.md` - What was fixed and why
- `VERCEL-CHECKLIST.md` - Pre-deployment checklist

**Your project is 100% ready to deploy! 🚀**
