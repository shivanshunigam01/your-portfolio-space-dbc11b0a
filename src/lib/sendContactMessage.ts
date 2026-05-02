export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends the contact form using either:
 * 1) Web3Forms — set `VITE_WEB3FORMS_ACCESS_KEY` (checked first)
 * 2) Your SMTP API (`npm run server`) — set `VITE_CONTACT_API_URL`
 */
function envTrim(value: string | undefined): string | undefined {
  const t = value?.trim();
  return t || undefined;
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const apiBase = envTrim(import.meta.env.VITE_CONTACT_API_URL)?.replace(/\/$/, "");
  const web3Key = envTrim(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

  if (web3Key) {
    // JSON submit — same fields Web3Forms accepts; reliable across browsers / proxies
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3Key,
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!res.ok || !data.success) {
      throw new Error(
        data.message ||
          (res.ok ? "Could not send message." : `Request failed (${res.status}).`)
      );
    }
    return;
  }

  if (apiBase) {
    const res = await fetch(`${apiBase}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    if (!res.ok) {
      throw new Error(data.error || "Could not send message.");
    }
    return;
  }

  throw new Error(
    "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY or VITE_CONTACT_API_URL in your .env file."
  );
}
