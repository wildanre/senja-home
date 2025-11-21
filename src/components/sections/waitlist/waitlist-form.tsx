"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Missing information', {
        description: 'Please fill in all fields.',
      });
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      toast.error('Invalid name', {
        description: 'Name should only contain letters and spaces.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email', {
        description: 'Please enter a valid email address.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize data before sending
      const sanitizedData = {
        name: formData.name.trim().replace(/\s+/g, ' '), // Remove extra spaces
        email: formData.email.trim().toLowerCase(), // Convert email to lowercase
      };

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Successfully joined the waitlist!', {
          description: 'We\'ll notify you when we launch.',
        });
        setFormData({ name: "", email: "" });
      } else {
        toast.error('Failed to join waitlist', {
          description: data.error || 'Please try again later.',
        });
      }
    } catch (error) {
      toast.error('Network error', {
        description: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        disabled={isSubmitting}
        className="w-full px-4 py-3 rounded-lg border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-900/30 text-white dark:text-gray-200 text-base placeholder:text-white/50 focus:outline-none focus:border-white/40 disabled:opacity-50"
      />

      <input
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value.toLowerCase() })}
        disabled={isSubmitting}
        className="w-full px-4 py-3 rounded-lg border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-900/30 text-white dark:text-gray-200 text-base placeholder:text-white/50 focus:outline-none focus:border-white/40 disabled:opacity-50"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white/20 hover:bg-white/30 dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-200 font-medium py-3 px-6 rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </button>
    </form>
  );
}

