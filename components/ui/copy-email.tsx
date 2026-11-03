"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-elevated/60 px-4 text-sm font-medium text-ink transition-colors hover:border-cyan/50"
    >
      {copied ? (
        <Check className="size-4 text-ok" aria-hidden="true" />
      ) : (
        <Copy className="size-4 text-cyan" aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
