"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PASSWORD = process.env.SITE_GATE_PASSWORD ?? "MKFF2026";
const COOKIE_NAME = "mkff_gate";

export type GateState = { error: string } | null;

function safeReturnTo(value: FormDataEntryValue | null): string {
  const raw = typeof value === "string" ? value : "/";
  // Only allow same-origin, absolute paths to avoid open redirects.
  return raw.startsWith("/") && !raw.startsWith("//") ? raw : "/";
}

export async function authenticate(
  _prevState: GateState,
  formData: FormData,
): Promise<GateState> {
  const password = String(formData.get("password") ?? "");
  const from = safeReturnTo(formData.get("from"));

  if (password !== PASSWORD) {
    return { error: "Incorrect password. Please try again." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "granted", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    secure: process.env.NODE_ENV === "production",
  });

  redirect(from);
}
