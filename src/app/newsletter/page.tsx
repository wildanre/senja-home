"use client";

import Footer from "@/components/sections/footer";
import NewsletterHeader from "@/components/sections/newsletter/newsletter-header";
import NewsletterItem from "@/components/sections/newsletter/newsletter-item";
import { newsletterItems } from "@/components/sections/newsletter/newsletter-data";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-black text-[#e7b67c] font-sans selection:bg-[#e7b67c] selection:text-black flex flex-col">
      <NewsletterHeader />

      <main className="container mx-auto px-6 py-12 lg:py-20 flex-grow">
        <div className="mb-20 text-center">
          <h1 className="font-hero text-5xl md:text-7xl lg:text-8xl text-[#e7b67c] mb-6">
            Newsletter
          </h1>
          <p className="text-[#e7b67c]/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Stay updated with the latest news, developments, and insights from
            the Senja ecosystem.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {newsletterItems.map((item, index) => (
            <NewsletterItem
              key={item.id}
              {...item}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
