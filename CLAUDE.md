# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demonstration tool for Japanese legal document diff visualization and PDF generation. The application allows users to input two plain text versions of legal documents and generates a vertical (tategaki) layout PDF with visual diff highlighting, built as a Remix SPA with TypeScript and Tailwind CSS.

### Key Features
- **Dual Text Input**: Two text areas for inputting original and modified legal document text
- **Real-time Preview**: Live preview of the formatted vertical layout with diff highlighting
- **Vertical Layout**: Traditional Japanese tategaki (vertical writing) with proper formatting
- **Diff Visualization**: Bold text and emphasis lines for changed content
- **PDF Generation**: Download formatted documents as PDF with Japanese font support
- **Legal Document Formatting**: Proper indentation, numbering, and border styling

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
  - UI components (TextInput, Preview, DownloadButton, Loading)
  - Layout components for vertical text display
- `app/routes/` - Remix file-based routing (current: `_index.tsx`)
- `app/utils/` - Utility functions
  - Text parser for legal document structure
  - Diff detection algorithms
  - PDF generation utilities
- `app/types/` - TypeScript type definitions
  - Document structure types
  - Diff result types
- `app/styles/` - CSS styles for vertical layout and diff visualization

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

### Expected Additional Dependencies
- **PDF Generation**: TBD (jsPDF, Puppeteer, or @react-pdf/renderer)
- **Diff Detection**: TBD (diff, jsdiff, or similar)
- **Testing**: TBD (Jest, Vitest, or similar)

## Development Approach

### TDD (Test-Driven Development)
This project follows TDD methodology with RED-GREEN-REFACTOR-DOC cycles for most features, except for visual layout components which use iterative visual adjustment.

### Development Order
1. **Vertical Layout Implementation** - Early technical feasibility validation
2. **Project Setup & Design** - Architecture and testing infrastructure
3. **Core Features** - Parser, diff detection, visualization (TDD)
4. **UI Integration** - Frontend components (TDD)
5. **PDF Generation** - Final output functionality (TDD)

### Visual Development
Vertical layout (tategaki) implementation uses visual-first development:
- Implement basic functionality
- Visual confirmation and iterative adjustment
- Browser compatibility testing
- Documentation of final implementation

## Technical Notes

### Vertical Text Layout (Tategaki)
- Uses CSS `writing-mode: vertical-rl` for traditional Japanese vertical text
- Custom border and line styling to match legal document formatting
- Proper handling of numbers, punctuation, and Latin characters in vertical layout
- Support for hierarchical indentation in vertical orientation