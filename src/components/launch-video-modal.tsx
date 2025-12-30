"use client";

import { useEffect, useState, useRef } from "react";
import { config } from "@/lib/config";
import { Volume2, VolumeX } from "lucide-react";

const STORAGE_KEY = "senja-launch-video-shown";
const LOADING_COMPLETE_DELAY = 3000; // Wait 3s for loading to complete

export function LaunchVideoModal() {
  const [showVideo, setShowVideo] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);

    // Check if already shown
    const hasShown = localStorage.getItem(STORAGE_KEY);
    if (hasShown === "true") {
      return;
    }

    // Check if waitlist has launched
    const now = Date.now();
    const launchTime = new Date(config.waitlistLaunchDate).getTime();
    const hasLaunched = now >= launchTime;

    // Only show video if waitlist has launched and never shown before
    if (hasLaunched) {
      // Wait for loading animation to complete (3 seconds)
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, LOADING_COMPLETE_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
    setShowVideo(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Don't render anything on server or if not showing
  if (!mounted || !showVideo) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Header Text */}
        <div className="text-center mb-6">
          <h2 className="font-hero text-2xl md:text-3xl text-white mb-2">
            <span className="text-senja-primary">Senja Finance</span>: Waitlist
            is Now Open
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative bg-linear-to-br from-senja-primary/10 to-transparent rounded-2xl overflow-hidden border border-senja-primary/20 shadow-2xl shadow-senja-primary/10">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-auto rounded-xl"
          >
            <source src="/senja-open-waitlist.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute Button - Overlay on video */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 border border-senja-primary/30 hover:border-senja-primary transition-all duration-200 group"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-senja-primary group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 className="w-5 h-5 text-senja-primary group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          {/* Don't show again checkbox */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="w-4 h-4 rounded border-senja-primary/30 bg-white/5 text-senja-primary focus:ring-senja-primary focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
              Don&apos;t show this again
            </span>
          </label>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="px-6 py-2.5 rounded-full border border-senja-primary/40 text-senja-primary hover:bg-senja-primary hover:text-[#120a06] transition-all duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
