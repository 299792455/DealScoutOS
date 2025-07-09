import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,var(--gradient-top),var(--gradient-mid),var(--gradient-bottom))] text-white text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-serif">
          Page not found
        </h2>
        <p className="text-lg text-gray-400 font-sans mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border  rounded-lg text-white hover:bg-black hover:text-white transition"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
