# Narola Infotech — Landing Page

A modern, high-performance landing page for **Narola Infotech**, built with Next.js 16 App Router, React 19, Tailwind CSS v4, and TypeScript.

---

## 📚 Project Documentation

All specifications, research, planning, and development records are organized in the [`docs/`](docs/) directory:

- 📊 **[Production Site Analysis](docs/PRODUCTION_SITE_ANALYSIS.md)**: Research audit of brand reference, services, technologies, industries, and public-facing business info.
- 🎨 **[Visual Direction & Design System](docs/VISUAL_DIRECTION.md)**: Brand palette, typography rules, component styling guidelines, and responsive layout specifications.
- 📋 **[Tasks & Milestones](docs/TASKS.md)**: Project roadmap, completed tasks, and backlog tracking.
- 📝 **[AI Work Log](docs/AI_WORK_LOG.md)**: Comprehensive development history, execution logs, and design decisions.
- 🚀 **[Changelog](docs/CHANGELOG.md)**: User-facing release notes and milestone change history.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Fonts**: Inter (via `next/font/google`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (Node.js 24 LTS recommended)
- `npm`

### Development

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

### Linting

```bash
# Run ESLint check
npm run lint
```

---

## 📁 Repository Structure

```text
narola-landing-page/
├── AGENTS.md                  # Next.js agent rules & conventions
├── CLAUDE.md                  # AI contributor guidelines & workflow rules
├── README.md                  # Project overview & documentation index
├── docs/                      # Project documentation and specifications
│   ├── AI_WORK_LOG.md         # Detailed development session logs
│   ├── CHANGELOG.md           # Version milestones and change history
│   ├── PRODUCTION_SITE_ANALYSIS.md # Brand reference audit & content analysis
│   ├── TASKS.md               # Task tracking & roadmap
│   └── VISUAL_DIRECTION.md    # Design system tokens & UI guidelines
├── public/                    # Static assets (images, icons, logos)
└── src/
    ├── app/                   # Next.js App Router (layout, pages, sitemap, robots)
    ├── components/            # React UI components (layout, sections, ui)
    └── content/               # Typed data modules & content configurations
```