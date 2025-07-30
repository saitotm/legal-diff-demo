# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demonstration of a diff tool for Japanese legal documents, built as a Remix SPA (Single Page Application) with TypeScript and Tailwind CSS.

## Architecture

### Remix SPA Configuration
- **SPA Mode**: Configured in `vite.config.ts` with `ssr: false` for client-side rendering only
- **Entry Points**: 
  - `app/entry.client.tsx` - Client-side hydration entry point
  - `app/entry.server.tsx` - Server-side entry (minimal for SPA mode)
  - `app/root.tsx` - Root application component with Japanese language setting

### Styling
- **Tailwind CSS v4**: Configured with PostCSS in `postcss.config.js`
- **CSS Import**: Main stylesheet at `app/tailwind.css` imported in root component

### Project Structure
- `app/components/` - Reusable React components
- `app/routes/` - Remix file-based routing (current: `_index.tsx`)
- `app/utils/` - Utility functions
- `app/types/` - TypeScript type definitions

## Development Commands

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production (SPA static files)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint code quality checks
npm run lint:fix   # Run ESLint with automatic fixes
npm run typecheck  # Run TypeScript type checking
```

## Code Quality

### ESLint Configuration
- Uses ESLint v9 with flat config format (`eslint.config.js`)
- Configured for React, TypeScript, and Remix patterns
- Ignores PostCSS config file (CommonJS format)

### Prettier
- Standard formatting rules in `.prettierrc`
- Ignores build directories and node_modules

### TypeScript
- Strict mode enabled with React JSX transform
- Path alias `~/*` maps to `./app/*`
- Includes all TypeScript files and server/client specific variants

## Dependencies Management

Project uses React 18.3.1 which is fully compatible with Remix v2. All dependencies should install without requiring the `--legacy-peer-deps` flag.