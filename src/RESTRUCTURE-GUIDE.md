# 🔧 PROJECT RESTRUCTURE GUIDE

## Current Problem
Your project files are scattered between root `/` and `/src`, causing TypeScript and Vite errors.

## Solution: Move Everything to /src (Standard Vite Structure)

---

## STEP 1: Create /src Folder Structure

If you don't have `/src` folder, create it:

```bash
mkdir -p src/components/ui
mkdir -p src/components/figma
mkdir -p src/styles
mkdir -p src/guidelines
```

---

## STEP 2: Move All React Files to /src

### Move Page Components:
```bash
mv App.tsx src/
mv Home.tsx src/
mv Services.tsx src/
mv About.tsx src/
mv Contact.tsx src/
mv Gallery.tsx src/
```

### Move Components Folder:
```bash
mv components src/
```

### Move Styles Folder:
```bash
mv styles src/
```

### Move Guidelines Folder (optional):
```bash
mv guidelines src/
```

### Move main.tsx (if it's at root):
```bash
mv main.tsx src/
```

---

## STEP 3: Update index.html

**File:** `/index.html` (stays at root)

Change the script tag from:
```html
<script type="module" src="/main.tsx"></script>
```

To:
```html
<script type="module" src="/src/main.tsx"></script>
```

---

## STEP 4: Update tsconfig.json

**File:** `/tsconfig.json` (stays at root)

Replace entire contents with:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Key changes:**
- `"include": ["src"]` instead of `["**/*.ts", "**/*.tsx"]`
- `"paths": { "@/*": ["src/*"] }` for imports
- Added `"jsx": "react-jsx"` for React 18

---

## STEP 5: Verify vite.config.ts

**File:** `/vite.config.ts` (stays at root)

Should look like:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild'
  }
})
```

---

## STEP 6: Final Project Structure

Your project should now look like this:

```
📦 Project Root
├── 📄 index.html                    ← Root (updated script tag)
├── 📄 package.json                  ← Root
├── 📄 vite.config.ts                ← Root
├── 📄 tsconfig.json                 ← Root (updated)
├── 📄 tsconfig.node.json            ← Root
├── 📄 vercel.json                   ← Root
├── 📄 .gitignore                    ← Root
├── 📄 .env.example                  ← Root
│
├── 📁 src/                          ← ALL REACT CODE HERE
│   ├── main.tsx                     ← Entry point
│   ├── App.tsx                      ← Router
│   ├── Home.tsx                     ← Pages
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Gallery.tsx
│   │
│   ├── 📁 components/
│   │   ├── Navbar.tsx
│   │   ├── McCoolLogo.tsx
│   │   ├── FeaturedCarousel.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CTAButton.tsx
│   │   │
│   │   ├── 📁 figma/
│   │   │   └── ImageWithFallback.tsx
│   │   │
│   │   └── 📁 ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── ... (all UI components)
│   │
│   ├── 📁 styles/
│   │   └── globals.css
│   │
│   └── 📁 guidelines/
│       └── Guidelines.md
│
└── 📁 Documentation (stays at root)
    ├── README.md
    ├── DEPLOYMENT.md
    ├── VERCEL-CHECKLIST.md
    └── FIXES-APPLIED.md
```

---

## STEP 7: Test Locally

```bash
# Install dependencies
npm install

# Test dev server
npm run dev

# Test production build
npm run build
```

If both commands work without errors, you're ready to deploy! ✅

---

## Why This Fixes Everything

1. **TypeScript finds all files**: `"include": ["src"]` tells TS where to look
2. **JSX works**: `"jsx": "react-jsx"` enables React 18 JSX transform
3. **Vite finds entry**: `/src/main.tsx` is the standard location
4. **Imports work**: `vite-tsconfig-paths` resolves `@/*` imports
5. **Standard structure**: Matches Vite documentation and best practices

---

## Quick Terminal Commands (Copy-Paste)

If you're in your project root:

```bash
# Create src structure
mkdir -p src/components src/styles src/guidelines

# Move files
mv App.tsx Home.tsx Services.tsx About.tsx Contact.tsx Gallery.tsx main.tsx src/ 2>/dev/null || true
mv components src/ 2>/dev/null || true
mv styles src/ 2>/dev/null || true
mv guidelines src/ 2>/dev/null || true

# Verify structure
ls -la src/
```

Then manually update `index.html` and `tsconfig.json` as described above.

---

## After Restructure: Push to GitHub

```bash
git add .
git commit -m "Restructure project to standard Vite /src layout"
git push
```

Vercel will automatically detect the changes and redeploy! 🚀
