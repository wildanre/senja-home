"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingPageProps {
  fadeOut: boolean;
}

interface Sparkle {
  id: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  size: number;
}

export default function LoadingPage({ fadeOut }: LoadingPageProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Generate random sparkle particles only on client side
  useEffect(() => {
    const generatedSparkles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden ${
        fadeOut ? 'animate-slide-up' : ''
      }`}
    >
      {/* Sparkle Particles */}
      <div className="sparkles-container">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Center Senja GIF Logo */}
      <div className="logo-container">
        <Image
          src="/senja2.gif"
          alt="Senja Loading"
          width={300}
          height={300}
          priority
          unoptimized
          className="logo-gif"
        />
      </div>

      <style jsx>{`
        /* Sparkles Container */
        .sparkles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        /* Individual Sparkle Particle */
        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(231, 182, 124, 1) 0%,
            rgba(231, 182, 124, 0.6) 40%,
            transparent 70%
          );
          opacity: 0;
          animation: sparkle-animate infinite ease-in-out;
          filter: blur(0.5px);
          box-shadow: 0 0 8px rgba(231, 182, 124, 0.8);
        }

        /* Sparkle Animation - Fade in/out with scale */
        @keyframes sparkle-animate {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Logo Container */
        .logo-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Logo GIF */
        .logo-gif {
          width: auto;
          height: auto;
          max-width: 300px;
          max-height: 300px;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(231, 182, 124, 0.4));
        }

        /* Slide Up Exit Animation */
        :global(.animate-slide-up) {
          animation: slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slide-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .logo-gif {
            max-width: 200px;
            max-height: 200px;
          }
        }

        @media (max-width: 480px) {
          .logo-gif {
            max-width: 150px;
            max-height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
