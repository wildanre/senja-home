"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface WaitlistCountdownProps {
  launchDate: string;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function WaitlistCountdown({
  launchDate,
}: WaitlistCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(launchDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="space-y-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 text-center space-y-4">
          <div className="w-12 h-12 border-2 border-senja-primary/30 border-t-senja-primary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  const isLaunched =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isLaunched) {
    return null; // Let parent component show the form
  }

  return (
    <div className="space-y-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-senja-primary">
            Waitlist Opens Soon
          </h2>
          <p className="text-sm text-senja-primary/50">
            Get ready to join the future of permissionless cross-chain lending.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-senja-primary">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">Days</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-senja-primary">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Hours
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-senja-primary">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Minutes
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-senja-primary">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Seconds
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs text-senja-primary/50">
            Launching{" "}
            {new Date(launchDate).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
