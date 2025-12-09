import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Contact Us
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the contact page. In a real application, you would have a
            contact form here to get in touch with the website owners.
          </p>
          <div className="flex flex-col gap-4">
            <div className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-black dark:text-zinc-50">Email:</strong> contact@ee-website.com
            </div>
            <div className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-black dark:text-zinc-50">Phone:</strong> (555) 123-4567
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Back to Home
            </Link>
            <Link
              href="/about"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
