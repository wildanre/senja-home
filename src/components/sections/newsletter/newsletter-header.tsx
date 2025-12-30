import Link from "next/link";
import Image from "next/image";

export default function NewsletterHeader() {
  return (
    <header className="container mx-auto px-6 py-8 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 relative overflow-hidden rounded-3xl transition-transform group-hover:scale-105 duration-300">
          <Image
            src="/senja2.gif"
            alt="Senja Logo"
            fill
            className="object-cover"
          />
        </div>
        <span className="font-elegant text-2xl font-semibold italic text-senja-primary group-hover:opacity-90 transition-opacity">
          Senja
        </span>
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-senja-primary/80 hover:text-senja-primary transition-colors"
      >
        Back to Home
      </Link>
    </header>
  );
}
