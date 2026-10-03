# Portfolio

This is my personal portfolio website hosted on Cloudflare Pages. You can visit it at [https://noelugwoke.com](https://noelugwoke.com).

# Personal Portfolio

This is a professional portfolio website built with React and Vite, showcasing my projects and skills.

## Features

- Modern, responsive design
- Project showcase
- Skills and experience sections
- Contact information

## Technologies Used

- React
- Vite
- CSS
- JavaScript

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/leonnuxy/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment

The site is hosted on Cloudflare Pages. Pushing to `main` builds (`npm run build`) and deploys `dist/` automatically.

The contact form posts to Formspree; its endpoint is set in `.env.production` as `VITE_FORM_ENDPOINT`.
