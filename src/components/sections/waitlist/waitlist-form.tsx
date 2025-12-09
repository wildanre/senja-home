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
        description: "Please fill in all fields.",
      });
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      toast.error("Invalid name", {
        description: "Name should only contain letters and spaces.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizedData = {
        name: formData.name.trim().replace(/\s+/g, " "),
        email: formData.email.trim().toLowerCase(), // Convert email to lowercase
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
        toast.success("Successfully joined the waitlist!", {
          description: "We'll notify you when we launch.",
        });
        setFormData({ name: "", email: "" });
      } else {
        toast.error("Failed to join waitlist", {
          description: data.error || "Please try again later.",
        });
      }
    } catch (_error) {
      toast.error("Network error", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 sm:space-y-4 bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10"
    >
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        disabled={isSubmitting}
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-900/30 text-white dark:text-gray-200 text-sm sm:text-base placeholder:text-white/50 focus:outline-none focus:border-white/40 disabled:opacity-50"
      />

      <input
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value.toLowerCase() })
        }
        disabled={isSubmitting}
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-900/30 text-white dark:text-gray-200 text-sm sm:text-base placeholder:text-white/50 focus:outline-none focus:border-white/40 disabled:opacity-50"
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="glass"
        className="w-full text-sm sm:text-base font-medium"
      >
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}
