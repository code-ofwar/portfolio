# My Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my skills, technologies, and projects.

## Live Demo

[View My Portfolio](https://my-portfolio-theta-ochre-40.vercel.app/)

## Features

- Responsive design for desktop and mobile devices
- Introduction and developer profile
- Technical skills and technologies
- Project showcase
- Contact form powered by Formspree
- Navigation to GitHub and project links

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Formspree

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure any required environment variables for the contact form, if applicable.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Featured Project

### KSP Shop

A full-stack e-commerce application featuring authentication, product management, a shopping cart, checkout, order tracking, and an admin dashboard.

## Author

GitHub: https://github.com/code-ofwar

## Known Issues

### 1. Prisma Version Compatibility

The project currently uses a Prisma release-candidate version, which may cause compatibility issues.

**Temporary workaround:** The `migrations` directory is excluded from TypeScript checks in `tsconfig.json`:

```json
"exclude": ["node_modules", "migrations"]
```

This workaround is temporary and should be reviewed after upgrading to a compatible Prisma version.

### 2. Concurrent Stock Updates

The current order creation logic does not fully prevent race conditions when multiple orders attempt to purchase the same product simultaneously. This may result in incorrect stock levels or overselling.

**Planned improvement:** Implement concurrency-safe stock updates using atomic conditional database updates or appropriate database locking and transaction isolation.
