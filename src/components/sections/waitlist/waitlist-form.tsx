"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Missing information", {
        description: "Please fill in all fields to continue.",
      });
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      toast.error("Invalid name format", {
        description: "Name should only contain letters and spaces.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizedData = {
        name: formData.name.trim().replace(/\s+/g, " "),
        email: formData.email.trim().toLowerCase(),
      };

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Welcome aboard", {
          description: "You have been added to the waitlist.",
        });
        setFormData({ name: "", email: "" });
      } else {
        toast.error("Unable to join", {
          description: data.error || "Please try again shortly.",
        });
      }
    } catch (_error) {
      toast.error("Connection error", {
        description: "Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="space-y-1.5 relative z-10">
        <label
          htmlFor="name"
          className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="ex. Alex Morgan"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isSubmitting}
          className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#e7b67c]/50 focus:ring-1 focus:ring-[#e7b67c]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/20"
        />
      </div>

      <div className="space-y-1.5 relative z-10">
        <label
          htmlFor="email"
          className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="alex@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value.toLowerCase() })
          }
          disabled={isSubmitting}
          className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#e7b67c]/50 focus:ring-1 focus:ring-[#e7b67c]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/20"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="senja-solid"
        className="w-full cursor-pointer py-6 text-base font-semibold mt-2 shadow-[0_0_20px_-5px_rgba(231,182,124,0.3)] hover:shadow-[0_0_25px_-5px_rgba(231,182,124,0.5)] relative z-10"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Processing...
          </span>
        ) : (
          "Secure Your Spot"
        )}
      </Button>
    </form>
  );
}
