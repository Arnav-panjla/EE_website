# EE Website - Next.js Application

A modern web application built with Next.js 16, demonstrating the power of App Router, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **ESLint** for code quality
- Multiple routing examples:
  - Static routes (`/about`, `/contact`)
  - Dynamic routes (`/blog/[slug]`)
  - Nested routing structure

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Dynamic blog post pages
│   │   └── page.tsx          # Blog listing page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
└── ...
```

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🔗 Routes

- `/` - Home page with navigation links
- `/about` - About page
- `/contact` - Contact page with sample contact information
- `/blog` - Blog listing page
- `/blog/first-post` - Example blog post (dynamic route)
- `/blog/second-post` - Example blog post (dynamic route)
- `/blog/third-post` - Example blog post (dynamic route)

## 🎨 Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Linting tool

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
