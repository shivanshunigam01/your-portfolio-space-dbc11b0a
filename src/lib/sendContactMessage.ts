export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Sends the contact form using either:
 * 1) Your SMTP API (`npm run server`) — set `VITE_CONTACT_API_URL`
 * 2) Web3Forms (no server) — set `VITE_WEB3FORMS_ACCESS_KEY`
 */
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const apiBase = import.meta.env.VITE_CONTACT_API_URL?.replace(/\/$/, "");
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

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

  if (web3Key) {
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
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!data.success) {
      throw new Error(data.message || "Could not send message.");
    }
    return;
  }

  throw new Error(
    "Contact form is not configured. Set VITE_CONTACT_API_URL (and run the SMTP server), or VITE_WEB3FORMS_ACCESS_KEY in your .env file."
  );
}
