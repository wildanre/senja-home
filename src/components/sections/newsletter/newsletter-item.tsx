import Image from "next/image";
import { Button } from "@/components/ui/button";

interface NewsletterItemProps {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  isReversed: boolean;
}

export default function NewsletterItem({
  title,
  description,
  date,
  image,
  isReversed,
}: NewsletterItemProps) {
  return (
    <article
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6 w-full text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-mono text-[#e7b67c]/60">
          <span>{date}</span>
          <div className="h-px w-8 bg-[#e7b67c]/30"></div>
          <span>News</span>
        </div>

        <h2 className="font-hero text-3xl md:text-4xl lg:text-5xl leading-tight text-[#e7b67c]">
          {title}
        </h2>

        <p className="font-sans text-lg text-[#e7b67c]/80 leading-relaxed font-light">
          {description}
        </p>

        <div className="pt-4 flex justify-center lg:justify-start">
          <Button variant="senja" size="senja-lg">
            Read More
          </Button>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#e7b67c]/10 bg-[#e7b67c]/5 group">
          <div className="absolute inset-0 bg-[#e7b67c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </article>
  );
}
