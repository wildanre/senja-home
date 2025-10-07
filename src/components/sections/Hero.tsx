import Button from "../ui/Button";
import RotatingTextType from "../ui/RotatingTextType";
import Image from "next/image";

export default function Hero() {
  const taglines = [
    "Permissionless Lending and Borrowing",
    "Trade Your Collateral",
    "Crosschain with Layer0 Integrated for Secure and Faster Transactions"
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/senja-logo.png"
            alt="Senja Logo"
            width={250}
            height={250}
            className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-senja-brown-dark dark:text-[#e8f0f7] tracking-tight transition-colors duration-300">
          Senja
        </h1>
        
        {/* Rotating Taglines with Typing Animation */}
        <div className="min-h-[120px] flex items-center justify-center">
          <p className="text-2xl md:text-3xl font-semibold text-senja-brown dark:text-[#d0dce6] transition-colors duration-300">
            <RotatingTextType 
              texts={taglines}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2500}
            />
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button href="https://senja-labs.vercel.app/" variant="primary" target="_blank" rel="noopener noreferrer">
            Get Started
          </Button>
          <Button href="https://senja.gitbook.io/senja-docs" variant="secondary" target="_blank" rel="noopener noreferrer">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
