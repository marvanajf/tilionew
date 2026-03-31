"use server";

import { sql } from "@/lib/db";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    company?: string;
    interest?: string;
    message?: string;
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const interest = (formData.get("interest") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!company) fieldErrors.company = "Please enter your company name.";
  if (!interest || !["ai-visibility-audit", "aeo-plan", "expertise"].includes(interest)) {
    fieldErrors.interest = "Please select an option.";
  }
  if (message.length > 200) {
    fieldErrors.message = "Please keep your message to 200 characters or fewer.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please correct the errors below.", fieldErrors };
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_enquiries (
        id          SERIAL PRIMARY KEY,
        name        TEXT        NOT NULL,
        email       TEXT        NOT NULL,
        company     TEXT,
        interest    TEXT        NOT NULL,
        message     TEXT,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO contact_enquiries (name, email, company, interest, message)
      VALUES (${name}, ${email}, ${company}, ${interest}, ${message || null})
    `;

    return { status: "success", message: "Thanks — we will be in touch shortly." };
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our end. Please try again or email us directly.",
    };
  }
}
