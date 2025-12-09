import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<string, { title: string; content: string; date: string }> = {
  "first-post": {
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful React framework that makes it easy to build full-stack web applications. With features like server-side rendering, static site generation, and API routes, Next.js provides everything you need to create modern web applications.",
    date: "December 1, 2025",
  },
  "second-post": {
    title: "Understanding App Router",
    content: "The App Router is a new paradigm in Next.js that uses React Server Components by default. It provides better performance, more intuitive routing, and improved developer experience with features like layouts, loading states, and error handling built-in.",
    date: "December 5, 2025",
  },
  "third-post": {
    title: "Dynamic Routes in Next.js",
    content: "Dynamic routes allow you to create pages that can handle variable URL segments. Using the [slug] folder naming convention, you can create pages that adapt to different parameters, making it easy to build blogs, product pages, and more.",
    date: "December 9, 2025",
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
              {post.title}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {post.date}
            </p>
          </div>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {post.content}
          </p>
          <div className="flex gap-4">
            <Link
              href="/blog"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Back to Blog
            </Link>
            <Link
              href="/"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
