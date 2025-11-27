# Local Development Guide

How to run this project locally on your machine.

## Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **bun** (package manager)

### Check if you have Node.js installed:

```bash
node --version
# Should show v18.x.x or higher
```

If not installed, download from: https://nodejs.org/

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

**Or using other package managers:**

```bash
# Using yarn
yarn install

# Using bun (faster)
bun install
```

### 2. Start Development Server

```bash
npm run dev
```

**Or:**

```bash
yarn dev
# or
bun dev
```

### 3. Open in Browser

The development server will start and show you the URL:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://[::]:8080/
```

Open **http://localhost:8080/** in your browser.

---

## Available Scripts

### Development

```bash
npm run dev
```

- Starts Vite development server
- Runs on port **8080**
- Hot Module Replacement (HMR) enabled
- Auto-reloads on file changes

### Build for Production

```bash
npm run build
```

- Builds the app for production
- Output folder: `dist/`
- Optimized and minified files

### Preview Production Build

```bash
npm run preview
```

- Serves the production build locally
- Useful for testing before deployment
- Default port: 4173

### Build Development Version

```bash
npm run build:dev
```

- Builds in development mode (less optimized)
- Useful for debugging production builds

### Lint Code

```bash
npm run lint
```

- Checks code for linting errors
- Uses ESLint

---

## Development Server Configuration

The dev server is configured in `vite.config.ts`:

- **Port:** 8080
- **Host:** `::` (all network interfaces)
- **Hot Reload:** Enabled

You can change the port by modifying `vite.config.ts`:

```typescript
server: {
  host: "::",
  port: 8080, // Change this to your preferred port
}
```

Or override via command line:

```bash
npm run dev -- --port 3000
```

---

## Project Structure

```
my-digital-hub/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── assets/         # Images, fonts, etc.
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── package.json        # Dependencies
└── vite.config.ts      # Vite configuration
```

---

## Common Issues & Solutions

### Port Already in Use

**Error:** `Port 8080 is already in use`

**Solution:**

```bash
# Kill the process using port 8080
# macOS/Linux:
lsof -ti:8080 | xargs kill -9

# Or use a different port:
npm run dev -- --port 3000
```

### Dependencies Installation Failed

**Error:** `npm ERR!` or installation fails

**Solution:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Module Not Found

**Error:** `Cannot find module '...'`

**Solution:**

```bash
# Make sure dependencies are installed
npm install

# If still fails, try:
rm -rf node_modules
npm install
```

### TypeScript Errors

**Error:** TypeScript compilation errors

**Solution:**

```bash
# Check TypeScript version
npx tsc --version

# TypeScript should be installed as dev dependency
npm install -D typescript
```

---

## Development Tips

### Hot Module Replacement (HMR)

Vite provides instant HMR - changes to files are reflected immediately in the browser without full page reload.

### Fast Refresh

React Fast Refresh is enabled - component state is preserved on edits.

### Browser DevTools

- Open browser DevTools (F12)
- Check Console for errors
- Use React DevTools extension for component debugging

### VS Code Setup

Recommended extensions:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features

---

## Environment Variables

If you need environment variables:

1. Create `.env` file in root:

```bash
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My Digital Hub
```

2. Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

**Note:** Variables must be prefixed with `VITE_` to be accessible in the browser.

---

## Testing the Production Build Locally

Before deploying, test the production build:

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

This will serve the optimized production build on port 4173.

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Build development version
npm run build:dev
```

---

## Need Help?

- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **TypeScript Docs:** https://www.typescriptlang.org/

---

That's it! Happy coding! 🚀

