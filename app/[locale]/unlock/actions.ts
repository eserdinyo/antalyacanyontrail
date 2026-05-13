"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safePath(p: string): string {
  if (!p || !p.startsWith("/") || p.startsWith("//")) return "/";
  return p;
}

export async function unlock(formData: FormData) {
  const locale = String(formData.get("locale") ?? "tr");
  const password = String(formData.get("password") ?? "");
  const from = safePath(String(formData.get("from") ?? "/"));
  const sitePassword = process.env.SITE_PASSWORD ?? "";

  if (!sitePassword || password !== sitePassword) {
    redirect(`/${locale}/unlock?error=1&from=${encodeURIComponent(from)}`);
  }

  const token = await sha256(`${sitePassword}::antalyacanyontrail::v1`);
  const jar = await cookies();
  jar.set("site-unlock", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  redirect(from);
}
