"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum([
    "Youth (17-26 from a developing country)",
    "Partner / Institution",
    "Donor / Supporter",
    "Alumni",
    "Other",
  ]),
  message: z.string().min(10, "Please share a bit more detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      role: "Partner / Institution",
    },
  });

  async function onSubmit(/* data: ContactFormData */ ) {
    setIsSubmitting(true);

    try {
      // Placeholder — replace with real Server Action + Resend in production
      await new Promise((r) => setTimeout(r, 650));

      toast.success("Thank you. Your message has been received.", {
        description: "A member of the MKFF team will reply within a few days.",
      });
      reset();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="card p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
            <input
              id="name"
              {...register("name")}
              className="w-full rounded-md border border-[var(--mkff-border)] bg-white px-4 py-3 text-sm focus:border-[var(--mkff-teal)]"
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full rounded-md border border-[var(--mkff-border)] bg-white px-4 py-3 text-sm focus:border-[var(--mkff-teal)]"
              placeholder="you@example.org"
              autoComplete="email"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1.5">I am a...</label>
          <select
            id="role"
            {...register("role")}
            className="w-full rounded-md border border-[var(--mkff-border)] bg-white px-4 py-3 text-sm focus:border-[var(--mkff-teal)]"
          >
            <option>Youth (17-26 from a developing country)</option>
            <option>Partner / Institution</option>
            <option>Donor / Supporter</option>
            <option>Alumni</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full resize-y rounded-md border border-[var(--mkff-border)] bg-white px-4 py-3 text-sm focus:border-[var(--mkff-teal)]"
            placeholder="How would you like to engage, partner, or support the work of MKFF and the Kectil Program?"
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p className="text-[10px] text-[var(--mkff-text-muted)] pt-1">
          We respect your privacy. Messages are reviewed by the MKFF team.
        </p>
      </form>
    </div>
  );
}
