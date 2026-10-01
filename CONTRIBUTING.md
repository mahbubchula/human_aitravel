# Contributing to Human × AI Travel Decision

Thank you for your interest in contributing! This document provides guidelines and information for contributors.

## 🎯 How to Contribute

### Reporting Bugs
- Use GitHub Issues to report bugs
- Include steps to reproduce, expected behavior, and actual behavior
- Add screenshots if applicable

### Suggesting Features
- Open an issue with the `enhancement` label
- Describe the feature and its benefits
- Provide mockups or examples if possible

### Pull Requests
1. Fork the repo and create your branch from `main`
2. Follow the existing code style
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with a clear description

## 💻 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/human_aitravel.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📐 Code Style

- **TypeScript** — All components use TypeScript with proper type definitions
- **Component Structure** — One component per file in `src/components/`
- **Styling** — Tailwind CSS utility classes; custom animations in `src/index.css`
- **Data** — Static data and configuration in `src/constants.ts`
- **Naming** — PascalCase for components, camelCase for functions/variables

## 🧪 Testing

Before submitting a PR, ensure:
- [ ] `npm run build` completes without errors
- [ ] `npm run typecheck` passes
- [ ] The app works on mobile and desktop viewports
- [ ] All animations and scroll effects function correctly

## 📝 Commit Messages

Use conventional commit format:

```
feat: add new animation for scene transitions
fix: resolve scroll progress calculation on mobile
docs: update README with new screenshots
style: adjust gradient colors for better contrast
```

## 🙏 Thank You!

Every contribution helps make this project better. We appreciate your time and effort!
