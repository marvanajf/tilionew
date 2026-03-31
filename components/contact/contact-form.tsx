"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const INITIAL_STATE: ContactFormState = {
  status: "idle",
  message: "",
};

const INTEREST_OPTIONS = [
  {
    id: "ai-visibility-audit",
    label: "AI Visibility Audit",
    description: "Fixed-price audit delivered in 24 hours. What AI says about you today, gaps versus competitors, and what to fix first.",
    price: "From £149",
  },
  {
    id: "aeo-plan",
    label: "AEO Plan",
    description: "Monthly programme: monitoring, content, and reporting across ChatGPT, Perplexity, and Google AI Overviews.",
    price: "£499/month",
  },
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center rounded-[10px] border border-[#93c5fd] bg-[#93c5fd]/20 px-7 py-3 text-sm font-medium text-[#1d4ed8] transition-all duration-200 hover:bg-[#93c5fd] hover:text-[#1e3a8a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? (
        <>
          <span className="mr-2">Sending…</span>
          <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 animate-spin" aria-hidden>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </span>
        </>
      ) : (
        <>
          <span className="mr-2">Send enquiry</span>
          <span className="inline-flex rounded-[10px] border border-[#93c5fd] p-1 transition-all duration-200 group-hover:border-[#60a5fa]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </>
      )}
    </button>
  );
}

const MESSAGE_MAX = 200;

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [state, formAction] = useActionState(submitContactForm, INITIAL_STATE);
  const [messageLen, setMessageLen] = useState(0);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-background p-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#93c5fd]/20">
          <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" className="h-5 w-5" aria-hidden>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-zinc-900">Enquiry received</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {state.status === "error" && !state.fieldErrors && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}

      {/* Interest selector */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-zinc-800">
          What are you interested in? <span className="text-red-500">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {INTEREST_OPTIONS.map((option) => (
            <label
              key={option.id}
              className="group relative flex cursor-pointer flex-col rounded-xl border border-zinc-200 bg-background p-5 transition-colors has-[:checked]:border-[#93c5fd] has-[:checked]:bg-[#93c5fd]/10 hover:border-zinc-300"
            >
              <input
                type="radio"
                name="interest"
                value={option.id}
                defaultChecked={defaultInterest === option.id}
                className="sr-only"
              />
              <span className="pr-6 text-sm font-semibold text-zinc-900">{option.label}</span>
              <span className="mt-0.5 text-xs font-medium text-zinc-400">{option.price}</span>
              <span className="mt-2 text-xs leading-relaxed text-zinc-600">{option.description}</span>
              <span className="pointer-events-none absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 bg-background transition-all group-has-[:checked]:border-[#1d4ed8] group-has-[:checked]:bg-[#1d4ed8]">
                <span className="h-1.5 w-1.5 rounded-full bg-white opacity-0 group-has-[:checked]:opacity-100" />
              </span>
            </label>
          ))}
        </div>
        {state.fieldErrors?.interest && (
          <p className="mt-1.5 text-xs text-red-600" role="alert">{state.fieldErrors.interest}</p>
        )}
      </fieldset>

      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-zinc-200 bg-background px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/20"
            placeholder="Jane Smith"
          />
          {state.fieldErrors?.name && (
            <p className="mt-1.5 text-xs text-red-600" role="alert">{state.fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-zinc-200 bg-background px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/20"
            placeholder="jane@company.com"
          />
          {state.fieldErrors?.email && (
            <p className="mt-1.5 text-xs text-red-600" role="alert">{state.fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-zinc-800">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-company"
          name="company"
          autoComplete="organization"
          required
          className="w-full rounded-lg border border-zinc-200 bg-background px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/20"
          placeholder="Acme Ltd"
        />
        {state.fieldErrors?.company && (
          <p className="mt-1.5 text-xs text-red-600" role="alert">{state.fieldErrors.company}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-zinc-800">
            Anything else we should know? <span className="text-xs font-normal text-zinc-400">(optional)</span>
          </label>
          <span className={`shrink-0 text-xs tabular-nums ${messageLen > MESSAGE_MAX ? "text-red-500" : "text-zinc-400"}`}>
            {messageLen}/{MESSAGE_MAX}
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={MESSAGE_MAX}
          onChange={(e) => setMessageLen(e.target.value.length)}
          className="w-full resize-none rounded-lg border border-zinc-200 bg-background px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/20"
          placeholder="Your goals, current SEO maturity, target market, timeline — anything helpful."
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs leading-relaxed text-zinc-400">
          We only use this to respond to your enquiry.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}
